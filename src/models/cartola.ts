export interface CartolaResponse {
    clubes: Record<string, Clube>
    posicoes: Record<string, Posicao>
    status: Record<string, Status>
    atletas: Atleta[]
}

interface Clube {
    escudos: Record<string, string>
    nome: string
    abreviacao: string
    slug: string
    apelido: string
    nome_fantasia: string
    id: number
    url_editoria: string
}

interface Posicao {
    id: number
    nome: string
    abreviacao: string
}

interface Status {
    id: number
    nome: string
}

interface Atleta {
    apelido: string
    atleta_id: number
    clube_id: number
    foto?: string
    posicao_id: number
    preco_num: number
    status_id: number
}
