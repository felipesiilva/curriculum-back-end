import { Request, Response } from "express";
import { ContatoModel } from "../models/ContatoModel";

class ContatoController {
    async findAll(req: Request , res: Response) {
        const contato = await ContatoModel.findAll();
        return contato.length > 0
        ?res.status(201).json(contato)
        :res.status(204).send();
    };
    async findOne(req: Request , res: Response) {
        const { contatoID } = req.params;
        const contato = await ContatoModel.findOne({
            where: { id: contatoID }
        });
        return contato
        ?res.status(201).json(contato)
        :res.status(204).send();
    };
    async create(req: Request , res: Response) {
        const {nome, email, telefone, empresa} = req.body;
        const contato = await ContatoModel.create({
            nome,
            email,
            telefone,
            empresa,
        });
        return res.status(201).json(contato);
    };
};

export default new ContatoController();