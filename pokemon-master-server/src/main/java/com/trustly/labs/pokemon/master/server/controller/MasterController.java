package com.trustly.labs.pokemon.master.server.controller;

import com.trustly.labs.pokemon.master.server.entity.Master;
import com.trustly.labs.pokemon.master.server.entity.Pokemon;
import com.trustly.labs.pokemon.master.server.entity.PokemonDeck;
import com.trustly.labs.pokemon.master.server.service.MasterService;
import com.trustly.labs.pokemon.master.server.service.PokemonCatalogService;
import com.trustly.labs.pokemon.master.server.service.PokemonService;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/masters")
public class MasterController {

    private final MasterService masterService;
    private final PokemonService pokemonService;
    private final PokemonCatalogService pokemonCatalogService;

    public MasterController(MasterService masterService, PokemonService pokemonService, PokemonCatalogService pokemonCatalogService) {
        this.masterService = masterService;
        this.pokemonService = pokemonService;
        this.pokemonCatalogService = pokemonCatalogService;
    }

    @GetMapping
    public Iterable<Master> getAllMasters() {
        return masterService.getAllMasters();
    }

    @PostMapping
    @PreAuthorize("isAuthenticated()")
    public Master createMaster(@RequestBody Master master) {
        return masterService.createMaster(master);
    }

    @PostMapping("/{masterId}/deck")
    @PreAuthorize("isAuthenticated()")
    public Master addPokemonToDeck(@PathVariable Long masterId, @RequestParam Long pokemonId) {
        // Step 1: Check if the Master exists in the database
        Master master = masterService.getMasterById(masterId);
        if (master == null) {
            throw new EntityNotFoundException("Master with ID " + masterId + " not found");
        }

        // Step 2: Check if the Pokémon already exists in the database
        Pokemon pokemon = pokemonService.findById(pokemonId); // Assuming pokemonService exists
        if (pokemon == null) {
            // Step 3: If not, fetch Pokémon details from the Pokémon Catalog
            Map<String, Object> pokemonDetails = pokemonCatalogService.getPokemonById(pokemonId);
            if (pokemonDetails == null || pokemonDetails.isEmpty()) {
                throw new EntityNotFoundException("Pokemon with ID " + pokemonId + " not found in the catalog");
            }

            // Step 4: Create a new Pokémon entity
            pokemon = new Pokemon();
            pokemon.setId(pokemonId);
            pokemon.setName((String) pokemonDetails.get("name")); // Extract name from the catalog response
            // Add other fields if necessary (e.g., abilities, type)
            pokemonService.save(pokemon); // Persist the newly created Pokémon entity
        }

        // Step 5: Create a new Pokémon Deck entry
        PokemonDeck deck = new PokemonDeck();
        deck.setMaster(master);
        deck.setPokemon(pokemon);

        // Step 6: Add the deck to the Master's list of decks
        master.getPokemonDeck().add(deck);

        // Step 7: Save the updated Master entity
        return masterService.saveMaster(master);
    }

}
