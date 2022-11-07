import {Router} from 'express'
import peliculas from '../model/model'
const router= Router()

router.get("/", async (req,res)=> {
    const allpeliculas = await peliculas.find();
    console.log(allpeliculas);
});


router.get("/ByYear", async (req,res)=> {
    const z=  input;
    const allpeliculas = await peliculas.find({'Year':z});
    console.log(allpeliculas);
});


router.get("/ByGenre", async (req,res)=> {
    const z= input 
    const allpeliculas = await peliculas.find({'Genre':z});
    console.log(allpeliculas);
});


router.get("/ByRated", async (req,res)=> {
    const z= input 
    const allpeliculas = await peliculas.find({'Rated':z});
    console.log(allpeliculas);
});

router.get("/ByRating", async (req,res)=> {
    const z= input 
    const allpeliculas = await peliculas.find({'Rating':z});
    console.log(allpeliculas);
});

router.get("/ByDirector", async (req,res)=> {
    const z= input 
    const allpeliculas = await peliculas.find({'Director':z});
    console.log(allpeliculas);
});



export default router;