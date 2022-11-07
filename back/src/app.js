import express from "express";
import IndexRoute from './routes/index_routes'
import morgan from "morgan";

const app = express();


export default app;

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extend:false}));
    
//routes
app.use(IndexRoute)
