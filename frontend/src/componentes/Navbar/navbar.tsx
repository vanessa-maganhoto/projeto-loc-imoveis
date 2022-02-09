import React, { useEffect } from 'react'
import { ReactComponent as GithubIcon } from "../../recursos/img/github.svg"
import './styles.css'
import FormCadastro from '../formCadastro'
import { Link } from 'react-router-dom'



export default function Navbar() {

    useEffect(
        () => {
            const url = window.location.href
            const res = url.split('?')
        }
    )


    const retornarCadastro = () => {
        return window.open(`http://localhost:3000/cadastro`, '_self')
    }



    return (
        <header>
            <nav className="container">
                <div className="loc-nav-content">
                    <Link to='/' className='rota-home'><h1>Loc Imóveis</h1></Link>
                   
                    <Link to='/cadastro'><div className="btn  loc-btn-header">Cadastrar</div></Link>

                </div>
            </nav>
        </header>
    )
}