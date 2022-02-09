package com.estudos.locacao.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estudos.locacao.dto.ImovelDTO;
import com.estudos.locacao.dto.ScoreDTO;
import com.estudos.locacao.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public ImovelDTO saveScore(@RequestBody ScoreDTO dto){
		ImovelDTO imovelDTO = service.saveScore(dto);
		return imovelDTO;
	}
}
