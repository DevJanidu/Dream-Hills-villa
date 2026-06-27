package com.dreamhills.dtos.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class CreateBookingReq {
    @NotBlank
    private String firstName;
    
    @NotBlank
    private String lastName;
    
    @NotBlank
    @Email
    private String email;
    
    @NotBlank
    private String phone;
    
    @NotNull
    @Future
    private LocalDate checkIn;
    
    @NotNull
    @Future
    private LocalDate checkOut;
    
    private String specialRequests;
    private List<String> addonIds;
}
