package com.estudos.locacao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estudos.locacao.entidades.Score;
import com.estudos.locacao.entidades.ScorePK;

public interface ScoreRepositorio extends JpaRepository <Score,ScorePK>{
	
}
