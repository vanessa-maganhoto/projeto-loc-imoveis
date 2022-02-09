package com.estudos.locacao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estudos.locacao.entidades.Imovel;

public interface ImovelRepositorio extends JpaRepository <Imovel,Long>{
	
}


/**
 * 
 * 
 * class <X> MinhaLista {
 * 
 * 	public void insere(X valor)
 * 
 * public void remove(X valor)
 * 
 * }
 * 
 * MinhaLista<String> ml = new MinhaLista()
 * ml.insere("aaaaaa")
 * 
 * MinhaLista<Integer> ml2 = new MinhaLista()
 * ml2.insere(2)
 * 
 * crud
 * 
 * JpaRepository <X, Y>
 * 
 * findByID(Y id) = select * FROM imovel where id = 10
 * 
 * List<X> findAll()
 * 
 * save(X obj)
 * 
 * delete (X obj)
 * 
 * 
 */
