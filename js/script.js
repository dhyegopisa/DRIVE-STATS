
// Seleciona os elementos do formulário
const formulario = document.getElementById("formulario");

const campoDistancia = document.getElementById("distancia");
const campoCombustivel = document.getElementById("combustivel");

const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

// Evento executado quando o formulário é enviado
formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();

    // Limpa mensagens anteriores
    mensagem.textContent = "";
    resultado.textContent = "";

    try {

        // Recebe os valores digitados
        const distancia = Number(campoDistancia.value);
        const combustivel = Number(campoCombustivel.value);

        // Verifica se os campos foram preenchidos
        if (campoDistancia.value.trim() === "" ||
            campoCombustivel.value.trim() === "") {

            throw new Error("Preencha todos os campos!");

        }

        // Verifica se os valores são válidos
        if (!Number.isFinite(distancia) ||
            !Number.isFinite(combustivel) ||
            distancia <= 0 ||
            combustivel <= 0) {

            throw new Error("Digite valores numéricos maiores que zero!");

        }

        // Calcula o consumo médio
        const consumo = distancia / combustivel;

        // Exibe o resultado
        resultado.textContent =
            "Seu veículo percorreu " +
            consumo.toFixed(2) +
            " km/L.";

        resultado.style.color = "#4ade80";

    } catch (erro) {

        // Exibe a mensagem de erro
        mensagem.textContent = erro.message;
        mensagem.style.color = "#ff5555";

    }

});
