document.getElementById('solicitacao-form').addEventListener('submit', async function(e) {
    e.preventDefault();  // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const categoria = document.getElementById('categoria').value;
    const endereco = document.getElementById('endereco').value;
    const descricao = document.getElementById('descricao').value;

    // Validação simples para garantir que a categoria seja selecionada
    if (!categoria) {
        alert("Por favor, selecione uma categoria válida.");
        return;
    }

    const data = { categoria, endereco, descricao };

    // Configurar o IP público da sua instância AWS
    const host = 'IP_PUBLICO_DA_INSTANCIA_AWS';  // Substitua pelo IP público da sua instância EC2
    const apiUrl = `http://${host}:8080/api/solicitacao`;  // URL para a API no servidor

    try {
        // Enviar os dados para a API utilizando fetch
        const response = await fetch(apiUrl, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Verificar a resposta do servidor
        console.log("Resposta recebida: ", response);
        console.log("Status: ", response.status);
        
        if (response.ok) {
            // Se a resposta for bem-sucedida, extrai o JSON da resposta
            const result = await response.json();
            alert(result.message);  // Exibe a mensagem de sucesso
        } else {
            // Se a resposta for de erro, loga a resposta para mais informações
            const errorData = await response.json();
            console.log("Erro na resposta:", errorData);
            alert('Erro ao enviar os dados');
        }
    } catch (error) {
        // Captura e loga erros de rede ou outros erros
        console.error('Erro ao enviar os dados:', error);
        alert('Erro ao enviar os dados');
    }
});