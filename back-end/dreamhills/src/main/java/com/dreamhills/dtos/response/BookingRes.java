package com.dreamhills.dtos.response;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
public class BookingRes {
    private Long id;
    private String guestName;
    private String guestEmail;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private String status;
    private BigDecimal totalAmount;
    private List<String> addons;
}
