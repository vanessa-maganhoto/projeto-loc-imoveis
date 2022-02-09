export type Imovel = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
    categoria: string;
    descricao: string;
    endereco: Endereco
}

export type Endereco = {
    id: number;
    logradouro: string;
    numero: string;
    bairro:string;
    cidade: string;
    estado: string;

}

export type ImovelPage = {
    content: Imovel[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}