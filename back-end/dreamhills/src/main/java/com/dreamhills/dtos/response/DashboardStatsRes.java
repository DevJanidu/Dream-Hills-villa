package com.dreamhills.dtos.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class DashboardStatsRes {
    private BigDecimal totalRevenue;
    private long totalBookings;
    private long upcomingCheckins;
    private double occupancyRate;
}
