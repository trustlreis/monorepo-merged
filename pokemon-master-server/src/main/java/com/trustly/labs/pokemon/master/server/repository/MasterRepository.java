package com.trustly.labs.pokemon.master.server.repository;

import com.trustly.labs.pokemon.master.server.entity.Master;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MasterRepository extends JpaRepository<Master, Long> {
}
