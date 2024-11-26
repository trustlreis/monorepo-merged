package com.trustly.labs.pokemon.master.server.service;

import com.trustly.labs.pokemon.master.server.entity.Pokemon;
import com.trustly.labs.pokemon.master.server.repository.PokemonRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PokemonService {

    private final PokemonRepository pokemonRepository;

    public PokemonService(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    /**
     * Find a Pokemon by its ID.
     * 
     * @param id The ID of the Pokemon.
     * @return The Pokemon if found, or null if not.
     */
    public Pokemon findById(Long id) {
        return pokemonRepository.findById(id).orElse(null);
    }

    /**
     * Save a Pokemon entity to the database.
     * 
     * @param pokemon The Pokemon entity to save.
     * @return The saved Pokemon entity.
     */
    public Pokemon save(Pokemon pokemon) {
        return pokemonRepository.save(pokemon);
    }
}
