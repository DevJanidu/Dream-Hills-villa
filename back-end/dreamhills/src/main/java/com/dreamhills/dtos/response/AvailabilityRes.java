package com.dreamhills.dtos.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
public class AvailabilityRes {
    private List<LocalDate> bookedDates;
}
