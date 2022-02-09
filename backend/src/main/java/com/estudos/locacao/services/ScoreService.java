package com.estudos.locacao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.estudos.locacao.dto.ImovelDTO;
import com.estudos.locacao.dto.ScoreDTO;
import com.estudos.locacao.entidades.Imovel;
import com.estudos.locacao.entidades.Score;
import com.estudos.locacao.entidades.User;
import com.estudos.locacao.repositories.ImovelRepositorio;
import com.estudos.locacao.repositories.ScoreRepositorio;
import com.estudos.locacao.repositories.UserRepositorio;

@Service
public class ScoreService {

	@Autowired
	private ImovelRepositorio imovelRepository;
	
	@Autowired
	private UserRepositorio userRepository;
	
	@Autowired
	private ScoreRepositorio scoreRepository;
	
	@Transactional
	public ImovelDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Imovel imovel = imovelRepository.findById(dto.getImovelId()).get();
		
		Score score = new Score();
		score.setImovel(imovel);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s : imovel.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / imovel.getScores().size();
		
		imovel.setScore(avg);
		imovel.setCount(imovel.getScores().size());
		
		imovel = imovelRepository.save(imovel);
		
		return new ImovelDTO(imovel);
	}
	
	
}











