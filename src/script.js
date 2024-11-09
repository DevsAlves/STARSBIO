const grau  = document.getElementById("grau"); 
const progresso = document.getElementById("progresso");
const prazo = document.getElementById("prazo");

const submit = document.getElementById("submit"); 

submit.addEventListener("click", () => {
    // Captura os valores dos campos de entrada
    const valorGrau = grau.value.toLowerCase();
    const valorProgresso = progresso.value.toLowerCase();
    
    // Cria um objeto Date com o valor de prazo
    const data = new Date(prazo.value); 
    
    // Formata a data para o formato brasileiro
    const dataFormatada = new Intl.DateTimeFormat('pt-BR').format(data);

    // Armazenando os valores no localStorage
    localStorage.setItem("grau", valorGrau);
    localStorage.setItem("progresso", valorProgresso);
    localStorage.setItem("prazo", dataFormatada);

    // Redireciona para outra página
    window.location.href = "../index.html"; // Alterar o nome para o arquivo da página de destino
});
