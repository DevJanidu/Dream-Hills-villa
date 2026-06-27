package com.dreamhills.services.impl;

import com.dreamhills.dtos.request.CreateBookingReq;
import com.dreamhills.dtos.response.AvailabilityRes;
import com.dreamhills.dtos.response.BookingRes;
import com.dreamhills.entities.Booking;
import com.dreamhills.entities.BookingAddon;
import com.dreamhills.entities.Guest;
import com.dreamhills.exceptions.BookingConflictException;
import com.dreamhills.repositories.AddonRepository;
import com.dreamhills.repositories.BookingAddonRepository;
import com.dreamhills.repositories.BookingRepository;
import com.dreamhills.repositories.GuestRepository;
import com.dreamhills.services.BookingService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final GuestRepository guestRepository;
    private final AddonRepository addonRepository;
    private final BookingAddonRepository bookingAddonRepository;

    private static final BigDecimal NIGHTLY_RATE = new BigDecimal("1250.00");
    private static final BigDecimal CLEANING_FEE = new BigDecimal("250.00");
    private static final BigDecimal SERVICE_FEE_RATE = new BigDecimal("0.15");
    private static final BigDecimal TAX_RATE = new BigDecimal("0.12");

    public BookingServiceImpl(BookingRepository bookingRepository, GuestRepository guestRepository,
                              AddonRepository addonRepository, BookingAddonRepository bookingAddonRepository) {
        this.bookingRepository = bookingRepository;
        this.guestRepository = guestRepository;
        this.addonRepository = addonRepository;
        this.bookingAddonRepository = bookingAddonRepository;
    }

    @Override
    public AvailabilityRes getAvailability(LocalDate startDate, LocalDate endDate) {
        List<Booking> overlapping = bookingRepository.findOverlappingBookings(startDate, endDate);
        List<LocalDate> bookedDates = new ArrayList<>();
        
        for (Booking b : overlapping) {
            LocalDate current = b.getCheckIn();
            while (current.isBefore(b.getCheckOut())) {
                bookedDates.add(current);
                current = current.plusDays(1);
            }
        }
        return new AvailabilityRes(bookedDates);
    }

    @Override
    @Transactional
    public BookingRes createBooking(CreateBookingReq req) {
        List<Booking> overlapping = bookingRepository.findOverlappingBookings(req.getCheckIn(), req.getCheckOut());
        if (!overlapping.isEmpty()) {
            throw new BookingConflictException("The selected dates are already booked.");
        }

        Guest guest = guestRepository.findByEmail(req.getEmail()).orElseGet(() -> {
            Guest newGuest = new Guest();
            newGuest.setEmail(req.getEmail());
            newGuest.setFirstName(req.getFirstName());
            newGuest.setLastName(req.getLastName());
            newGuest.setPhone(req.getPhone());
            return guestRepository.save(newGuest);
        });

        long nights = ChronoUnit.DAYS.between(req.getCheckIn(), req.getCheckOut());
        BigDecimal baseTotal = NIGHTLY_RATE.multiply(BigDecimal.valueOf(nights));
        BigDecimal serviceFee = baseTotal.multiply(SERVICE_FEE_RATE);
        BigDecimal tax = baseTotal.multiply(TAX_RATE);
        BigDecimal totalAmount = baseTotal.add(CLEANING_FEE).add(serviceFee).add(tax);

        // Addons total
        if (req.getAddonIds() != null) {
            for (String addonId : req.getAddonIds()) {
                addonRepository.findById(addonId).ifPresent(addon -> 
                    totalAmount.add(addon.getPrice())
                );
            }
        }

        Booking booking = new Booking();
        booking.setGuestId(guest.getId());
        booking.setCheckIn(req.getCheckIn());
        booking.setCheckOut(req.getCheckOut());
        booking.setStatus("CONFIRMED");
        booking.setBaseAmount(baseTotal);
        booking.setTaxAmount(tax);
        booking.setTotalAmount(totalAmount);
        booking.setSpecialRequests(req.getSpecialRequests());
        booking.setCreatedAt(LocalDateTime.now());

        Booking savedBooking = bookingRepository.save(booking);

        if (req.getAddonIds() != null) {
            for (String addonId : req.getAddonIds()) {
                BookingAddon ba = new BookingAddon();
                ba.setBookingId(savedBooking.getId());
                ba.setAddonId(addonId);
                bookingAddonRepository.save(ba);
            }
        }

        return mapToRes(savedBooking, guest, req.getAddonIds());
    }

    @Override
    public List<BookingRes> getAllBookings() {
        List<BookingRes> resList = new ArrayList<>();
        Iterable<Booking> bookings = bookingRepository.findAll();
        for (Booking b : bookings) {
            Guest guest = guestRepository.findById(b.getGuestId()).orElse(new Guest());
            resList.add(mapToRes(b, guest, new ArrayList<>()));
        }
        return resList;
    }

    @Override
    public BookingRes updateBookingStatus(Long id, String status) {
        Booking b = bookingRepository.findById(id).orElseThrow();
        b.setStatus(status);
        bookingRepository.save(b);
        Guest guest = guestRepository.findById(b.getGuestId()).orElse(new Guest());
        return mapToRes(b, guest, new ArrayList<>());
    }

    private BookingRes mapToRes(Booking b, Guest g, List<String> addons) {
        BookingRes res = new BookingRes();
        res.setId(b.getId());
        res.setGuestName(g.getFirstName() + " " + g.getLastName());
        res.setGuestEmail(g.getEmail());
        res.setCheckIn(b.getCheckIn());
        res.setCheckOut(b.getCheckOut());
        res.setStatus(b.getStatus());
        res.setTotalAmount(b.getTotalAmount());
        res.setAddons(addons);
        return res;
    }
}
