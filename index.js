const express = require('express')
const app = express();

//app.METODO('rota/caminho', (req, res) => {})
app.get('/users', (req, res) => {
    res.send("Usuarios: ")
});

app.post('/users', (req, res) => {
    res.send("Rota users usando post")
});

app.get('/user/:id', (req, res) => {
    res.send(`O parametro é ${req.params.id}`);
});

app.post('/user/:id1-:id2', (req, res) => {
    res.send(req.params);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor web ouvindo porta ${PORT}`)
})
