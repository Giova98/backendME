import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js'

const server = express();

server.use(morgan('dev'));
server.use(express.json());//esta funcion sirve para que se pueda leer los objetos json

server.use("/api",authRoutes);


export default server;
