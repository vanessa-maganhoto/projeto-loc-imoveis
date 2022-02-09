import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Score from '../componentes/score'
import { Imovel } from '../types/imovel';


type Props = {
    imovel: Imovel

}

export default function Cards({ imovel }: Props) {

    
   
    return (
        <div className='container'>
            <img className=" loc-movie-card-image" src={imovel.image} alt={imovel.title} />
            <div className="loc-card-bottom-container">
                <h2>{imovel.categoria}</h2>
                <h3>{imovel.title}</h3>
                <div>{imovel.endereco.logradouro}, {imovel.endereco.numero} - {imovel.endereco.bairro} {imovel.endereco.cidade}-{imovel.endereco.estado} </div>


                <Score count={imovel.count} score={imovel.score} />

                <Link to={`/form/${imovel.id}`}>
                    <div className="btn loc-btn">Avaliar</div>
                </Link>
                <Link to={`/detalhes/${imovel.id}`}>
                    <div style={{marginTop: "10px"}} className="btn loc-btn" >Detalhes</div>

                </Link>


            </div>
        </div>
    )
}