import * as React from 'react'
import { Link } from 'react-router-dom';
import './form.css'
import { Imovel } from '../types/imovel'
import axios from 'axios';
import { BASE_URL } from '../utils/requests';
import { useParams } from 'react-router-dom';


export default function FormDetalhes() {

    const params = useParams()
    const id = params.imovelId

    
    const [imovel, setImovel] = React.useState<Imovel>()

    React.useEffect(() => {
        axios.get(`${BASE_URL}/imovel/${id}`)
            .then(response => {
                setImovel(response.data)
            })
    }, [id])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        
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

                    <Link to={`/atualizar/${imovel.id}`} style={{ textDecoration: "none" }}>
                        <div className="loc-form-btn-container">
                            <button type="submit" className=" btn loc-btn">Alterar dados</button>
                        </div>
                    </Link>
                </form >

                <button onClick={excluirImovel} className="btn  loc-btn mt-3">Excluir imóvel</button>


                <Link to="/" style={{ textDecoration: "none" }}  >
                    <button className="btn  loc-btn mt-3">Cancelar</button>

                </Link>
            </div >
        </div >



    )
}