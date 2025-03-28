const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8080;

// CORS - libera o servidor de restrições
app.use(cors({
    origin: '*',
}));

// Middleware - para rodar HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/solicitacao', (req, res) => {
    const { categoria, endereco, descricao } = req.body;

    if (!categoria || !endereco || !descricao) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    console.log("Dados recebidos do front-end:", req.body);

    // Envio de resposta de sucesso
    res.status(200).json({
        message: "Solicitação enviada com sucesso!",
        user: { categoria, endereco, descricao }
    });
});

// Iniciar o servidor
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
});