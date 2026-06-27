package com.dreamhills.services;

import com.dreamhills.dtos.request.CreateBookingReq;
import com.dreamhills.dtos.response.AvailabilityRes;
import com.dreamhills.dtos.response.BookingRes;

import java.time.LocalDate;
import java.util.List;

public interface BookingService {
    AvailabilityRes getAvailability(LocalDate startDate, LocalDate endDate);
    BookingRes createBooking(CreateBookingReq req);
    List<BookingRes> getAllBookings();
    BookingRes updateBookingStatus(Long id, String status);
}
