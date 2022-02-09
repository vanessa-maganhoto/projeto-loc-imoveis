import * as React from 'react'
import {ReactComponent as Seta} from '../recursos/img/setaCinza.svg'
import { ImovelPage } from '../types/imovel'
import './paginacaoStyle.css'

type Props ={
    page : ImovelPage
    onChange : Function
}

export default function Paginacao( { page, onChange } : Props) {
    return (
        <div className="loc-pagination-container">
            <div className="loc-pagination-box">
                <button className="loc-pagination-button" disabled={page.first} onClick={()=> onChange(page.number - 1)} >
                    <Seta />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="loc-pagination-button" disabled={page.last} onClick={()=> onChange(page.number + 1)} >
                    <Seta className="loc-flip-horizontal" />
                </button>
            </div>
        </div>
    )
}