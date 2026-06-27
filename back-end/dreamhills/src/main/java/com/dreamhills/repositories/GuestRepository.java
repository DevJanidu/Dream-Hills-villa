package com.dreamhills.repositories;

import com.dreamhills.entities.Guest;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

public interface GuestRepository extends CrudRepository<Guest, Long> {
    Optional<Guest> findByEmail(String email);
}
