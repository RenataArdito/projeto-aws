const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para processar solicitações
app.post('/solicitacao', (req, res) => {
    console.log('Recebendo solicitação:', req.body);

    const { categoria, endereco, descricao } = req.body;

    if (!categoria || !endereco || !descricao) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    res.status(200).json({ message: 'Solicitação recebida com sucesso!' });
});

// Inicia o servidor
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
});
