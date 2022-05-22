import { Request, Response } from "express";
import { ComentarioModel } from "../models/ComentarioModel";

class ComentarioController {
    async findAll(req: Request , res: Response) {
        const comentario = await ComentarioModel.findAll();
        return comentario.length > 0
        ?res.status(201).json(comentario)
        :res.status(204).send();
    };
    async findOne(req: Request , res: Response) {
        const { comentarioID } = req.params;
        const comentario = await ComentarioModel.findOne({
            where: { id: comentarioID }
        });
        return comentario
        ?res.status(201).json(comentario)
        :res.status(204).send();
    };
    async create(req: Request , res: Response) {
        const {nome, comentario} = req.body;
        const curriculo = await ComentarioModel.create({
            nome,
            comentario,
        });
        return res.status(201).json(curriculo);
    };
};

export default new ComentarioController();