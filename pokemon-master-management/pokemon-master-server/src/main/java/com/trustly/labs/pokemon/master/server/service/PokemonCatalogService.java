package com.trustly.labs.pokemon.master.server.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PokemonCatalogService {

    private static final String POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

    private final RestTemplate restTemplate;

    public PokemonCatalogService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    // Fetches all Pokémon with a limit of 1000 (adjust as needed)
    public List<Map<String, Object>> getAllPokemon() {
        String url = POKEAPI_BASE_URL + "/pokemon?limit=1000";
        Map<String, Object> response = restTemplate.getForObject(url, Map.class);

        // Extract Pokémon results from the API response
        return (List<Map<String, Object>>) response.get("results");
    }

    // Fetches details about a specific Pokémon by ID
    public Map<String, Object> getPokemonById(Long id) {
        String url = POKEAPI_BASE_URL + "/pokemon/" + id;
        return restTemplate.getForObject(url, Map.class);
    }

    // Searches for Pokémon by name within the fetched list
    public List<Map<String, Object>> searchPokemon(String name) {
        // Retrieve all Pokémon and filter locally
        List<Map<String, Object>> allPokemon = getAllPokemon();

        return allPokemon.stream()
                .filter(pokemon -> pokemon.get("name").toString().contains(name.toLowerCase()))
                .collect(Collectors.toList());
    }
}
