package com.trustly.labs.pokemon.master.server.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pokemon {
    @Id
    private Long id;

    private String name;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
