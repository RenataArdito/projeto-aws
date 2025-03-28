const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Servir arquivos estáticos do front-end
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal para o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor do front-end
app.listen(port, '0.0.0.0', () => {
    console.log(`Front-end rodando na porta ${port}`);
});
