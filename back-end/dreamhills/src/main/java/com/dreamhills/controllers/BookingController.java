package com.dreamhills.controllers;

import com.dreamhills.dtos.request.CreateBookingReq;
import com.dreamhills.dtos.response.ApiResponse;
import com.dreamhills.dtos.response.AvailabilityRes;
import com.dreamhills.dtos.response.BookingRes;
import com.dreamhills.services.BookingService;
import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("/availability")
    public ApiResponse<AvailabilityRes> getAvailability(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        AvailabilityRes res = bookingService.getAvailability(startDate, endDate);
        return new ApiResponse<>(true, "Availability fetched successfully", res);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse<BookingRes> createBooking(@Valid @RequestBody CreateBookingReq req) {
        BookingRes res = bookingService.createBooking(req);
        return new ApiResponse<>(true, "Booking created successfully", res);
    }

    @GetMapping
    public ApiResponse<List<BookingRes>> getAllBookings() {
        List<BookingRes> res = bookingService.getAllBookings();
        return new ApiResponse<>(true, "Bookings fetched successfully", res);
    }

    @PatchMapping("/{id}/status")
    public ApiResponse<BookingRes> updateStatus(@PathVariable Long id, @RequestParam String status) {
        BookingRes res = bookingService.updateBookingStatus(id, status);
        return new ApiResponse<>(true, "Booking status updated", res);
    }
}
