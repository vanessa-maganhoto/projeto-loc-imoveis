import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './form.css'
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../utils/requests';




export default function FormCadastro() {


    
    const navigate = useNavigate()

    const [,setImovel] = useState('')

    React.useEffect(() => {
        axios.post(`${BASE_URL}/imovel`)
            .then(response => {
                setImovel(response.data)
            })
    }, [])

    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const titulo = (event.target as any).titulo.value
        const imagem = (event.target as any).imagem.value
        const cep = (event.target as any).cep.value
        const logradouro = (event.target as any).logradouro.value
        const numero = (event.target as any).numero.value
        const bairro = (event.target as any).bairro.value
        const complemento = (event.target as any).complemento.value
        const cidade = (event.target as any).cidade.value
        const estado = (event.target as any).estado.value
        const categoria = (event.target as any).categoria.value
        const descricao = (event.target as any).descricao.value

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/imovel',
            data: {
                title: titulo,
                image: imagem,
                categoria: categoria,
                descricao: descricao,

                endereco: {
                    cep: cep,
                    logradouro: logradouro,
                    numero: numero,
                    bairro: bairro,
                    complemento: complemento,
                    cidade: cidade,
                    estado: estado
                }
            }
        }

        axios(config)
            .then(() => {
                window.alert("Imóvel cadastrado com sucesso")
                navigate("/")


            })
            .catch(() => {
                window.alert("Ocorreu um erro ao cadastrar o imóvel")
            })
    }



    const getElem = (id: string) => document.getElementById(id) as any

    const checkCEP = (e: React.FormEvent<HTMLInputElement>) => {
        const cep = (e.target as any).value.replace(/\D/g, '')
        console.log(cep)
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {

                getElem('logradouro').value = data.logradouro
                getElem('bairro').value = data.bairro
                getElem('complemento').value = data.complemento
                getElem('cidade').value = data.localidade
                getElem('estado').value = data.uf
                console.log(data)

            })
            .catch(e => {
                console.error("Nao foi possivel buscar o cep", e )
                return true;
            })
    }

    return (
        <div className="loc-form-container">
            <div className="loc-card-bottom-container">
                <h3 style={{ fontSize: "30px" }}>Cadastro de Imóvel</h3>
                <form className="loc-form" onSubmit={handleSubmit}>
                    <div className="form-group loc-form-group">
                        <label htmlFor="titulo" >Título</label>
                        <input className="form-control" type="text" id="titulo" required/>
                        <label htmlFor='cep'>CEP</label>
                        <input type="text" id="cep" className="form-control" onBlur={checkCEP} required/>
                        <label htmlFor='logradouro'>Logradouro</label>
                        <input className="form-control" type="text" id='logradouro' required />
                        <label htmlFor='numero'>Número</label>
                        <input className="form-control" type="text" id="numero" required/>
                        <label htmlFor="bairro">Bairro</label>
                        <input className="form-control" type="text" id="bairro" required/>
                        <label htmlFor='complemento'>Complemento</label>
                        <input className="form-control" type="text" id="complemento" />
                        <label htmlFor='cidade'>Cidade</label>
                        <input className="form-control" type="text" id="cidade" required/>
                        <label>Estado</label>
                        <select className="form-control " id="estado" required>
                            <option value="" disabled selected>Selecione o estado</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="PR">PR</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SE">SE</option>
                            <option value="SP">SP</option>
                            <option value="TO">TO</option>
                        </select>
                        <label htmlFor='categoria'>Categoria</label>
                        <select className="form-control "  id='categoria' required>
                            <option value="" disabled selected>Escolha a categoria</option>
                            <option value="comercial">Comercial</option>
                            <option value="residencial">Residencial</option>
                            <option value="temporada">Temporada</option>
                        </select>
                        <label htmlFor='descricao'>Descrição do Imóvel</label>
                        <textarea className="form-control" id="descricao" required></textarea>
                        <label htmlFor="imagem">Imagem</label>
                        <input className="form-control" type="text" id="imagem" required/>
                    </div>
                    <div className="loc-form-btn-container">
                        <button type="submit" className=" btn loc-btn">Salvar</button>
                    </div>
                </form>
                <Link to="/" style={{ textDecoration: "none" }}  >
                    <button className="btn  loc-btn mt-3">Cancelar</button>
                </Link>
            </div>
        </div>

    )
}