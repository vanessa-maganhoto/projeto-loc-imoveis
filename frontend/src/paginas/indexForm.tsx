import * as React from 'react'
import { useParams } from 'react-router-dom';
import FormCard from '../componentes/formCard';


export default function Form(){

    const params = useParams()

    return (
        <FormCard imovelId = {`${params.imovelId}`}/>
    )
}

