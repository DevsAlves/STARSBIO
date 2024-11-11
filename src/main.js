document.addEventListener("DOMContentLoaded", function () {
    const lesao2 = localStorage.getItem("lesao");
    const progresso2 = localStorage.getItem("progresso");
    const prazo2 = localStorage.getItem("prazo");

    document.getElementById("burn").textContent = lesao2; 
    document.getElementById("progress").textContent = ` ${progresso2}/10`; 
    document.getElementById("term").textContent = prazo2; 

    const circle = document.getElementById("circle");
    const progressComment = document.getElementById("message");

    // Garantindo que o valor de progresso2 seja tratado como número
    const progressoNum = parseInt(progresso2);

    if(progressoNum <= 5) {
        circle.style.backgroundColor = "red";
        progressComment.textContent = "Precisa melhorar"
    } else if (progressoNum <= 7) {
        circle.style.backgroundColor = "yellow";
        progressComment.textContent = "Melhorando"
    } else if (progressoNum >= 8) {
        circle.style.backgroundColor = "green";
        progressComment.textContent = "Melhor"
    };
});