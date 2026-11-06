

function calcularIMC(){
    const nome = document.getElementById("nome")
    const altura = document.getElementById("altura")
    const peso = document.getElementById("peso")
    const visor = document.getElementById("resultado")


    if(!altura.value && !peso.value && !nome.value) {
        alert("preencha corretamente os valores de altura, peso e nome")
    } else {
        let IMC = peso.value / (altura.value * altura.value)
        let classificacao = ""

        if(IMC <= 18.5) {
            classificacao = "Abaixo do peso"
        }
        else if(IMC > 18.5 && IMC <= 24.9) {
            classificacao = "Peso normal"
        }
        else if(IMC >= 18.5 && IMC <= 29.9) {
            classificacao = "SobrePeso"
        }
        else if(IMC >= 18.5 && IMC <= 34.9) {
            classificacao = "Obesidade grau I"
        }
        else if(IMC >= 18.5 && IMC <= 39.9) {
            classificacao = "Obesidade grau II"
        } 
        else{
            classificacao = "Obesidade grau III"
        }
        visor.textContent = `${nome.value} tem o IMC de ${IMC.toFixed(2)} classificacao: ${classificacao}`
    }
}


const botao = document.getElementById("calcular")
botao.addEventListener("click", calcularIMC)