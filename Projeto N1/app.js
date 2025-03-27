const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const app = express();
const port = 25000;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/api/solicitacao', (req, res) => { 
    const { categoria, endereco, descricao } = req.body;

    if (!categoria || !endereco || !descricao) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    console.log("Dados recebidos do front-end:", req.body); 

    res.json({
        message: "Solicitação enviada com sucesso!",
        user: { categoria, endereco, descricao } 
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(Back-end rodando na porta ${port});
});