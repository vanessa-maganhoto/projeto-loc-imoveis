import * as React from 'react'
import Paginacao from '../componentes/paginacao'
import Cards from '../componentes/cards'
import axios from 'axios'
import { BASE_URL } from '../utils/requests'
import { ImovelPage } from '../types/imovel'




export default function Listing() {
    // eslint-disable-next-line
    const [pageNumber, setPageNumber] = React.useState(0)

    const [page, setPage] = React.useState<ImovelPage>(
        {
            content: [],
            last: true,
            totalPages: 0,
            totalElements: 0,
            size: 12,
            number: 0,
            first: true,
            numberOfElements: 0,
            empty: true
        }
    )

    React.useEffect(() => {

        axios.get(`${BASE_URL}/imovel?size=12&page=${pageNumber}`)
            .then(response => {
                const data = response.data as ImovelPage
                setPage(data)

            })
    }, [pageNumber])

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    } 


    return (
        <>
            <Paginacao page={page} onChange={handlePageChange}/>
            <div className='container'>
                <div className='row'>

                    {page.content.map(imovel => (

                        <div key={imovel.id} className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                            < Cards imovel={imovel} />
                        </div>
                    )
                    )}

                </div>
            </div>

        </>
    )
}