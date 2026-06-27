package com.dreamhills.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.math.BigDecimal;

@Data
@Table("addon")
public class Addon {
    @Id
    private String id;
    private String label;
    private BigDecimal price;
}
