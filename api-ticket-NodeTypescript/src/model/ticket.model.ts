import {Document} from 'mongoose'

export class Ticket extends Document {
    titulo:string
    subtitulo:string
    tipo_sistema:string
    horario_criacao:string
    tempo_trabalho:number
    retrabalho:boolean
    status:string
}