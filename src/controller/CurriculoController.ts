import { Request, Response } from "express";
import { CurriculoModel } from "../models/CurriculoModel";

class CurriculoController {
    async findAll(req: Request , res: Response) {
        const curriculos = await CurriculoModel.findAll();
        return curriculos.length > 0
        ?res.status(200).json(curriculos)
        :res.status(204).send();
    };
    async findOne(req: Request , res: Response) {
        const { curriculoID } = req.params;
        const curriculo = await CurriculoModel.findOne({
            where: {
                id: curriculoID,
            }, 
        });
        return curriculo 
        ? res.status(200).json(curriculo)
        : res.status(204).send();
    };
    async create(req: Request , res: Response) {
        const {nome, idade, email, telefone, formacao, experiencia1, experiencia2} = req.body;
        const curriculo = await CurriculoModel.create({
            nome,
            idade,
            email,
            telefone,
            experiencia1,
            experiencia2,
        });
        return res.status(201).json(curriculo);
    };
};

export default new CurriculoController();
