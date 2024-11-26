package com.trustly.labs.pokemon.master.server.service;

import com.trustly.labs.pokemon.master.server.entity.Master;
import com.trustly.labs.pokemon.master.server.repository.MasterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MasterService {

    private final MasterRepository masterRepository;

    public MasterService(MasterRepository masterRepository) {
        this.masterRepository = masterRepository;
    }

    public List<Master> getAllMasters() {
        return masterRepository.findAll();
    }

    public Master getMasterById(Long id) {
        return masterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Master not found"));
    }

    public Master createMaster(Master master) {
        return masterRepository.save(master);
    }

    public Master saveMaster(Master master) {
        return masterRepository.save(master);
    }

    public void deleteMaster(Long id) {
        masterRepository.deleteById(id);
    }
}
