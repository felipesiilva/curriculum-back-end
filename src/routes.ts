import express from "express";
import CurriculoController from "./controller/CurriculoController";
import ContatoController from "./controller/ContatoController";
import ComentarioController from "./controller/ComentarioController";


const router = express.Router();

// rotas para curriculos
router.post('/curriculos', CurriculoController.create);
router.get('/curriculos', CurriculoController.findAll);
router.get('/curriculos/:curriculoID', CurriculoController.findOne);

// rota para empresa
router.post('/empresa', ContatoController.create);
router.get('/empresa', ContatoController.findAll);

//rota para comentario

router.post('/comentarios', ComentarioController.create);
router.get('/comentarios', ComentarioController.findAll);


export { router };