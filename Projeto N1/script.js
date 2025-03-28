document.getElementById('solicitacao-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const categoria = document.getElementById('categoria').value;
    const endereco = document.getElementById('endereco').value;
    const descricao = document.getElementById('descricao').value;

    if (!categoria) {
        alert("Por favor, selecione uma categoria válida.");
        return;
    }

    const data = { categoria, endereco, descricao };

    // URL do backend na AWS
    const apiUrl = `http://3.90.248.26:8080/api/solicitacao`;

    try {
        const response = await fetch(apiUrl, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
        } else {
            alert('Erro ao enviar os dados');
        }
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        alert('Erro ao enviar os dados');
    }
});
