const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a raiz (/)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a solicitação
app.post('/solicitacao', (req, res) => {
    const { categoria, endereco, descricao } = req.body;
    console.log('Categoria:', categoria);
    console.log('Endereço:', endereco);
    console.log('Descrição:', descricao);

    // Resposta com status 200
    res.status(200).json({ message: 'Solicitação recebida com sucesso!' });
});

// Inicia o servidor e permite conexões externas
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
});
