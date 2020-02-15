import { Request, Response } from 'express'
import Ticket from '../schemas/Ticket'

class TicketController {
    public async index(req:Request,res:Response):Promise<Response> {
        const tickets = await Ticket.find()
        return res.json(tickets)   
    }

    public async store(req:Request,res:Response):Promise<Response> {
        const tickets = await Ticket.create(req.body)
        return res.json(tickets)
    }

    public async findOne(req:Request,res:Response):Promise<Response>{
        const ticket = await Ticket.findOne(req.body);
        console.log(req.body)
        if(!ticket){
            throw("Ticket não encontrado");
        }

        return res.json(ticket)
    }

    public async delete(req:Request,res:Response):Promise<Response> {
       return  await Ticket.findByIdAndRemove(req.params.id)
        .then((u:any)=> u.json());
    }

}

export default new TicketController()