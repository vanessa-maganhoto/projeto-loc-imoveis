package com.estudos.locacao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estudos.locacao.entidades.User;

public interface UserRepositorio extends JpaRepository <User,Long>{
	
	User findByEmail(String email);
	
}
