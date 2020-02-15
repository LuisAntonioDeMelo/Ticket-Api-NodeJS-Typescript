import { Schema , model } from 'mongoose' 
import { Ticket } from '../model/ticket.model'


const TicketSchema = new Schema ({
    titulo:String,
    subtitulo:String,
    tipo_sistema:String,
    horario_criacao:String,
    tempo_trabalho:Number,
    retrabalho:Boolean,
    status:String
},{
    timestamps:true
})
export default model<Ticket>('Ticket',TicketSchema)
