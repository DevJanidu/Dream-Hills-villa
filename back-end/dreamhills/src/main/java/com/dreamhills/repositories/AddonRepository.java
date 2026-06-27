package com.dreamhills.repositories;

import com.dreamhills.entities.Addon;
import org.springframework.data.repository.CrudRepository;

public interface AddonRepository extends CrudRepository<Addon, String> {
}
