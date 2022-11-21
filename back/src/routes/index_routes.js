import {request, response, Router} from 'express'
import peliculas from '../model/model'
import usuario from '../model/usuario'
const jwt = require ('jsonwebtoken')

const router= Router()




// Todos peliculas
router.get("/", async (req,res)=> {
    const allpeliculas = await peliculas.find();
    res.send(allpeliculas);
});





//iniciar sesion con token

router.post("/login", async(req,res)=>{
    const {body}= request;
    const {username, password} = body;
    
    const  User= await usuario.find({username})
    const passwordCorrect = User == null
    ? false
    : password == User.password
    if (!(User && passwordCorrect)) {
        res.status(401).json({
            error: 'invalid user or password'
        })}
    const userForToken= {
        id: User._id,
        username: User.username}

    const token = jwt.sign(userForToken,'cine')

    res.send ({nombre: User.nombre,
        username: User.username,
    token})
});



// Crear critica
router.post("/Critica/add", async (req,res) =>{
    const peliculas = Peliculas(req.body);

    const authorization= request.get('authorization')
    let token= ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')){ 
        token= authorization.substring(7)}
       
    const decodedToken = jwt.verify(token,'cine')
    if (!token || !decodedToken.id) {
        return res.status(401).json({error: 'token missing or invalid' })
    } 
    const peliculasave= await peliculas.save(); 
    const {id : UserId}= decodedToken
    const user= usuario.findById(UserId); 
    user.criticas= user.criticas.concat(peliculasave._id);
})


//Busar por x

router.get("/ByYear/:z", async (req,res)=> {
    const z =  req.params.z;
    const allpeliculas = await peliculas.find({'Year':z});
    console.log(allpeliculas);
});


router.get("/ByGenre/:z", async (req,res)=> {
    const z =  req.params.z;
    const allpeliculas = await peliculas.find({'Genre':z});
    console.log(allpeliculas);
});


router.get("/ByRated/:z", async (req,res)=> {
    const z =  req.params.z;
    const allpeliculas = await peliculas.find({'Rated':z});
    console.log(allpeliculas);
});

router.get("/ByRating/:z", async (req,res)=> {
    const z =  req.params.z;
    const allpeliculas = await peliculas.find({'Rating':z});
    console.log(allpeliculas);
});

router.get("/ByDirector/:z", async (req,res)=> {
    const z =  req.params.z;
    const allpeliculas = await peliculas.find({'Director':z});
    console.log(allpeliculas);
});

//eliminar critica
router.get("/delete/:id", async (req, res)=> {
    const {id} = req.params.id;
    await peliculas.findByIdAndRemove(id)
    res.redirect("/")
});

//edit critica
router.post("/editar/:id", async (req,res)=> {
    const {id} =req.params.id;
    await peliculas.findByIdAndUpdate(id,req.body)
});



//todos los usuarios
router.get("/usuario", async (req,res) =>{
    const allusuario = await usuario.find();
    res.send( allusuario) 
});

//usuario y sus criticas
router.get("/usuario/criticas/:id", async (req,res) =>{
    const {id}= req.params.id
    const allusuario = await usuario.find(id).populate('criticas') ;
    res.send( allusuario) });



/* function get_para(){
    const search= window.location.search
    const url= new URLSearchParams(search)
    const param_usuario= url.get("obj")
    const usuario= JSON.parse(param_usuario)
    return  URL_API = "http://localhost:8080/peliculas/fullname?usuario_Id="+ usuario.id
  
  }
 */
export default router;