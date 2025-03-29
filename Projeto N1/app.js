const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 25000;

// CORS - Permite que o front-end acesse a API
app.use(cors({
    origin: 'http://3.90.248.26:8080',  // Substitua pelo IP público da instância pública
}));

// Middleware para JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint para receber solicitações
app.post('/api/solicitacao', (req, res) => {
    const { categoria, endereco, descricao } = req.body;

    if (!categoria || !endereco || !descricao) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    console.log("Dados recebidos do front-end:", req.body);

    res.status(200).json({
        message: "Solicitação enviada com sucesso!",
        user: { categoria, endereco, descricao }
    });
});

// Inicia o servidor
app.listen(port, '0.0.0.0', () => {
    console.log(`Back-end rodando na porta ${port}`);
});
