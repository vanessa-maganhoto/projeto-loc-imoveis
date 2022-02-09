import * as React from 'react'
import '../componentes/scoreStyles.css'
import AvalicaoEstrela from '../componentes/avaliacaoEstrelas'

type Props = {
    score: number
    count: number
}


export default function Score({score, count} : Props) {
    
    
    
    return (

        <div className="loc-score-container">
            <p className="loc-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <AvalicaoEstrela  score = {score}/>
            <p className="loc-score-count">{count} avaliações</p>
        </div>
    )
}
