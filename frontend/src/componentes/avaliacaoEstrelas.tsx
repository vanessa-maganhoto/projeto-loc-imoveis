import * as React from 'react'
import { ReactComponent as EstrelaPreenchida } from '../recursos/img/estrelaCompleta.svg'
import { ReactComponent as EstrelaMetade } from '../recursos/img/estrelaMetade.svg'
import { ReactComponent as EstrelaVazia } from '../recursos/img/estrelaVazia.svg'
import '../componentes/avaliacaoEstrelasStyles.css'

type Props = {
  score:number
}

type EstrelaProps = {
  fill:number
}


function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Estrela({fill} : EstrelaProps){
  if(fill === 0){
    return <EstrelaVazia/>
  } else if (fill === 1){
    return <EstrelaPreenchida/>
  } else{
    return <EstrelaMetade/>
  }
}

export default function AvaliacaoEstrelas({ score }: Props) {

  const fills = getFills(score)

  return (
    <div className="loc-estrelas-containe">
      <Estrela fill={fills[0]}/>
      <Estrela fill={fills[1]}/>
      <Estrela fill={fills[2]}/>
      <Estrela fill={fills[3]}/>
      <Estrela fill={fills[4]}/>
      
    </div>

  )
}