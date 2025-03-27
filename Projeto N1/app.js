const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 25000;

// Configuração do CORS
app.use(cors({
    origin: '*',  // Permite que qualquer origem acesse a API. Substitua "*" pelo domínio do seu front-end, se necessário.
}));

// Middleware para aceitar JSON e formulários
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos (se necessário)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a página HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para receber as solicitações do formulário
app.post('/api/solicitacao', (req, res) => {
    const { categoria, endereco, descricao } = req.body;

    // Verificação de campos obrigatórios
    if (!categoria || !endereco || !descricao) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    // Log dos dados recebidos para depuração
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