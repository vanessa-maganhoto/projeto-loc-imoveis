import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'



export default function Navbar() {

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