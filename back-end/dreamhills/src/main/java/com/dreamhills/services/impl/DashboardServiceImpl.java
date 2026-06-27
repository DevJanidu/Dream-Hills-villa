package com.dreamhills.services.impl;

import com.dreamhills.dtos.response.DashboardStatsRes;
import com.dreamhills.entities.Booking;
import com.dreamhills.repositories.BookingRepository;
import com.dreamhills.services.DashboardService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final BookingRepository bookingRepository;

    public DashboardServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @Override
    public DashboardStatsRes getStats() {
        Iterable<Booking> bookings = bookingRepository.findAll();
        BigDecimal totalRev = BigDecimal.ZERO;
        long totalCount = 0;
        long upcoming = 0;

        for (Booking b : bookings) {
            totalCount++;
            if (!"CANCELLED".equals(b.getStatus())) {
                totalRev = totalRev.add(b.getTotalAmount());
            }
            if ("CONFIRMED".equals(b.getStatus())) {
                upcoming++; // Simplification for upcoming checkins
            }
        }

        return new DashboardStatsRes(totalRev, totalCount, upcoming, 0.85); // Dummy occupancy
    }
}
