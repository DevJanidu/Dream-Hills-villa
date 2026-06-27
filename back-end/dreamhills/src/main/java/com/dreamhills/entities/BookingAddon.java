package com.dreamhills.entities;

import lombok.Data;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("booking_addon")
public class BookingAddon {
    private Long bookingId;
    private String addonId;
}
