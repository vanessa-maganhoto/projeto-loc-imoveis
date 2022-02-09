import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './form.css'
import { Imovel } from '../types/imovel'
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../utils/requests';
import Cards from './cards';
import { useParams } from 'react-router-dom';


export default function FormDetalhes() {

    const params = useParams()
    const id = params.imovelId

    const navigate = useNavigate();

    const [imovel, setImovel] = React.useState<Imovel>()

    React.useEffect(() => {
        axios.get(`${BASE_URL}/imovel/${id}`)
            .then(response => {
                setImovel(response.data)
            })
    }, [id])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        /* const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'GET',
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

        axios(config).then(response => {
            console.log(response.data)
            navigate("/")
        })*/

    }

    if (!imovel) {
        return null
    }
    const { image, title, endereco, categoria, descricao } = imovel
    const { logradouro, numero, bairro, cidade, estado } = endereco

    const excluirImovel = () => {
        window.alert('cliquei')
        axios.delete(`${BASE_URL}/imovel/${id}`)
            .then(response => {
                alert('Excluído com sucesso')
                window.location.href = '/'
            })
    }

    return (

        <div className="loc-form-container">
            <img className="loc-movie-card-image" src={image} alt={title} />
            <div className="loc-card-bottom-container">
                <h2>{categoria}</h2>
                <h3>{title}</h3>
                <form className="loc-form" onSubmit={handleSubmit} >
                    <div className="form-group loc-form-group">
                        {logradouro}, {numero} - {bairro} {cidade}-{estado}
                        <p>{descricao}</p>
                    </div>

                    <div className="loc-form-btn-container">
                        <button type="submit" className=" btn loc-btn">Alterar dados</button>
                    </div>
                </form >

                <button onClick={excluirImovel} className="btn  loc-btn mt-3">Excluir imóvel</button>


                <Link to="/" style={{ textDecoration: "none" }}  >
                    <button className="btn  loc-btn mt-3">Cancelar</button>

                </Link>
            </div >
        </div >



    )
}