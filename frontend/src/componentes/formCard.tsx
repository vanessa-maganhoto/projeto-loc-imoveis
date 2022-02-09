import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './form.css'
import { Imovel } from '../types/imovel' 
import axios, {AxiosRequestConfig} from 'axios';
import { BASE_URL } from '../utils/requests';
import { validateEmail } from '../utils/validate'

type Props = {
    imovelId :  string
}
export default function FormCard( { imovelId } : Props){

    const navigate = useNavigate();
    
    const [imovel, setImovel] = React.useState<Imovel>()

    React.useEffect(()=>{
        axios.get(`${BASE_URL}/imovel/${imovelId}`)
            .then(response => {
                setImovel(response.data)
            })
    }, [imovelId])

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if(!validateEmail(email)){
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                imovelId: imovelId,
                score: score
            }
        }

        axios(config).then(response => {
            console.log(response.data)
            navigate("/")
        })

    }


    return (
        <div className="loc-form-container">
            <img className="loc-movie-card-image" src={imovel?.image} alt={imovel?.title} />
            <div className="loc-card-bottom-container">
                <h3>{imovel?.title}</h3>
                <form className="loc-form" onSubmit={handleSubmit}>
                    <div className="form-group loc-form-group">
                        <label htmlFor="email" >Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group loc-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control " id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="loc-form-btn-container">
                        <button type="submit" className=" btn loc-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/" style={{textDecoration: "none"}}  >
                    <button  className="btn  loc-btn mt-3">Cancelar</button>

                </Link>
            </div >
        </div >
    )
}