package com.estudos.locacao.dto;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.estudos.locacao.entidades.Imovel;

// POJO 
public class ImovelDTO {
	
	private Long id;
	@NotBlank
	private String title;
	private Double score;
	private Integer count;
	@NotBlank
	private String image;
	@NotBlank
	private String categoria;
	@NotBlank
	private String descricao;
	@NotNull
	@Valid
	private EnderecoDTO endereco;
	
	public ImovelDTO() {
	}

	public ImovelDTO(Long id, String title, Double score, Integer count, String image) {
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
	}
	
	public ImovelDTO(Imovel imovel) {
		id = imovel.getId();
		title = imovel.getTitle();
		score = imovel.getScore();
		count = imovel.getCount();
		image = imovel.getImage();
		categoria = imovel.getCategoria();
		descricao = imovel.getDescricao();
		if (imovel.getEndereco() != null) {
		endereco = new EnderecoDTO(imovel.getEndereco());
		}
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public EnderecoDTO getEndereco() {
		return endereco;
	}

	public void setEndereco(EnderecoDTO endereco) {
		this.endereco = endereco;
	}
	
	
}
