import { Router } from "express";

const router= Router();
router.get('/', (req, res)=>res.render('index',{title:'La Casa Informática'}));
router.get('/SobreNostros' , (req, res)=>res.render('about',{title:'Acerca de nosotros'}));
router.get('/servicios', (req, res)=>res.render('servicios',{title:'Servicios'}));
router.get('/products', (req, res)=>res.render('products',{title:'Productos'}));
router.get('/promociones', (req, res)=>res.render('promociones',{title:'Promociones'}));
router.get('/bot', (req, res)=>res.render('bot',{title:'Bot'}));
export default router;