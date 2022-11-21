import express from "express";
import IndexRoute from './routes/index_routes'
import morgan from "morgan";
const cors = require ('cors');

const app = express();
app.use(cors())

export default app;

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extend:false}));
    
//routes
app.use(IndexRoute)
