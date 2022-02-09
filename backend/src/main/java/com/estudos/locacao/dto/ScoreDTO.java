package com.estudos.locacao.dto;

public class ScoreDTO {
	
	private Long imovelId;
	private String email;
	private Double score;
	
	public ScoreDTO() {}

	public Long getImovelId() {
		return imovelId;
	}

	public void setImovelId(Long imovelId) {
		this.imovelId = imovelId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}
	
	
}
