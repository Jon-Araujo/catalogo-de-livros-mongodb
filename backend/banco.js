const express = require('express');
const app = express();

const mongoose = require('mongoose');

const Livro = require('./Livro');

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,HEAD,OPTION,POST,PATCH,DELETE");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.post('/novo', async (req, res) => {
    const { id, titulo, editora, resumo, autor } = req.body;

    if (!id) {
        res.status(422).json({ message: "O título é obrigatório!" })
    };

    const livro = {
        id,
        titulo,
        editora,
        resumo,
        autor
    };

    try {
        await Livro.create(livro)

        res.status(201).json({ message: "Livro inserido no sistema com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

app.get('/novo', (req, res) => {
    res.json({ message: "Oi, express!" })
});

//gyfE6duUYEsudk12
//mongodb+srv://Jonathan:<gyfE6duUYEsudk12>@cluster0.plxyzam.mongodb.net/bancocatalogolivro?retryWrites=true&w=majority

const DB_USER = "Jonathan";
const DB_PASSWORD = encodeURIComponent('gyfE6duUYEsudk12')

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.plxyzam.mongodb.net/bancocatalogolivro?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conectado ao MongoDB!")
        app.listen(4200)
    })
    .catch((err) => console.log(err))

