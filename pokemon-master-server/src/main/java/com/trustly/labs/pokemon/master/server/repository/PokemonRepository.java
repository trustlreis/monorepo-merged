package com.trustly.labs.pokemon.master.server.repository;

import com.trustly.labs.pokemon.master.server.entity.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
}
