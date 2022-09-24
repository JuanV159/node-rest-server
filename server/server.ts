import express, { json } from 'express';
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { item } from '../src/items';
import { User } from '../src/interface/user';
dotenv.config();
const PORT = process.env.PORT;
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/usuarios", (req, res) => {

    res.json("get Usuarios")
});

app.post("/usuarios", (req, res) => {
    const body: User = req.body;

    if (body.age === undefined || body.age === undefined || body.name.length === 0) {
        res.status(400)
            .json({
                ok: false,
                message: "No se ingresaron todos los campos"
            });
    } else {
        res.status(201)
        .json({
            persona: body
        })
    }

});

app.put("/usuarios/:id", (req, res) => {
    let id = req.params.id
    res.json({
        id
    })
});

app.delete("/usuarios", (req, res) => {
    res.json("delete Usuarios")
});

app.listen(`${PORT}`, () => { console.log(`corriendo en el puerto ${PORT}`) })