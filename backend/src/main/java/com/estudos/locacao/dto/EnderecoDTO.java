package com.estudos.locacao.dto;

import javax.validation.constraints.NotBlank;

import com.estudos.locacao.entidades.Endereco;

public class EnderecoDTO {
	
	private Long id;
	@NotBlank
	private String cep; 
	@NotBlank
	private String logradouro;
	@NotBlank
	private String numero;
	@NotBlank
	private String bairro;
	private String complemento;
	@NotBlank
	private String cidade;
	@NotBlank
	private String estado;
	
	public EnderecoDTO() {}

	public EnderecoDTO(Long id, String cep, String logradouro, String numero, String bairro, String complemento,
			String cidade, String estado) {
		
		this.id = id;
		this.cep = cep;
		this.logradouro = logradouro;
		this.numero = numero;
		this.bairro = bairro;
		this.complemento = complemento;
		this.cidade = cidade;
		this.estado = estado;
	}
	
	public EnderecoDTO (Endereco endereco) {
		id = endereco.getId();
		cep = endereco.getCep();
		logradouro = endereco.getLogradouro();
		numero = endereco.getNumero();
		bairro = endereco.getBairro();
		complemento = endereco.getComplemento();
		cidade = endereco.getCidade();
		estado = endereco.getEstado();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	

}
