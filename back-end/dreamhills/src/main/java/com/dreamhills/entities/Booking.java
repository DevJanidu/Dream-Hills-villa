package com.dreamhills.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Table("booking")
public class Booking {
    @Id
    private Long id;
    private Long guestId;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private String status;
    private BigDecimal baseAmount;
    private BigDecimal taxAmount;
    private BigDecimal totalAmount;
    private String specialRequests;
    private LocalDateTime createdAt;
}
