package com.dreamhills.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("guest")
public class Guest {
    @Id
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
}
