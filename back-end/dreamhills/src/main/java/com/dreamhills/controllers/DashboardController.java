package com.dreamhills.controllers;

import com.dreamhills.dtos.response.ApiResponse;
import com.dreamhills.dtos.response.DashboardStatsRes;
import com.dreamhills.services.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/stats")
    public ApiResponse<DashboardStatsRes> getStats() {
        DashboardStatsRes res = dashboardService.getStats();
        return new ApiResponse<>(true, "Stats fetched successfully", res);
    }
}
