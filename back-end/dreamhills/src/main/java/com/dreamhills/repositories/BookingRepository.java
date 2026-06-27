package com.dreamhills.repositories;

import com.dreamhills.entities.Booking;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends CrudRepository<Booking, Long> {
    
    @Query("SELECT * FROM booking WHERE status != 'CANCELLED' AND " +
           "(check_in < :checkOut AND check_out > :checkIn)")
    List<Booking> findOverlappingBookings(@Param("checkIn") LocalDate checkIn, @Param("checkOut") LocalDate checkOut);

    @Query("SELECT * FROM booking WHERE status != 'CANCELLED' AND check_in >= :startDate")
    List<Booking> findUpcomingBookings(@Param("startDate") LocalDate startDate);
}
