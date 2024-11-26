package com.trustly.labs.pokemon.master.server.controller;

import com.trustly.labs.pokemon.master.server.service.PokemonCatalogService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/pokemon")
public class PokemonCatalogController {

    private final PokemonCatalogService pokemonCatalogService;

    public PokemonCatalogController(PokemonCatalogService pokemonCatalogService) {
        this.pokemonCatalogService = pokemonCatalogService;
    }

    // Endpoint to list all Pokémon
    @GetMapping
    public List<Map<String, Object>> getAllPokemon() {
        return pokemonCatalogService.getAllPokemon();
    }

    // Endpoint to search for Pokémon by name
    @GetMapping("/search")
    public List<Map<String, Object>> searchPokemon(@RequestParam String name) {
        return pokemonCatalogService.searchPokemon(name);
    }

    // Endpoint to get details of a Pokémon by ID
    @GetMapping("/{id}")
    public Map<String, Object> getPokemonById(@PathVariable Long id) {
        return pokemonCatalogService.getPokemonById(id);
    }
}
