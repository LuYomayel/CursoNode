import express from "express";
import _dirname from './utils.js';

const app = express();
const server = app.listen(8080, () => console.log('Listening to port 8080'))

app.use(express.static(_dirname+'/public'))