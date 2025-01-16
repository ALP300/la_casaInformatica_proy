import { Router } from "express";

const router= Router();
router.get('/', (req, res)=>res.render('index',{title:'La Casa Informática'}));
router.get('/about' , (req, res)=>res.render('about',{title:'Acerca de nosotros'}));

export default router;