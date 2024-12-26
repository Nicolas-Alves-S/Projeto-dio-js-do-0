// Pedimos ao usuário para inserir o nome e a XP do herói
const nomeHeroi = prompt("Digite o nome do herói:");
const xpHeroi = parseInt(prompt("Digite a XP do herói:"));

// Definimos as faixas de XP e seus respectivos níveis
let nivel;

if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi <= 5000) {
  nivel = "Prata";
} else if (xpHeroi <= 7000) {
  nivel = "Ouro";
} else if (xpHeroi <= 8000) {
  nivel = "Platina";
} else if (xpHeroi <= 9000) {
  nivel = "Ascendente";
} else if (xpHeroi <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// ... resto do código

// Selecionamos o elemento <p> onde a mensagem será exibida
const resultado = document.getElementById("resultado");

// Inserimos a mensagem no elemento <p>
resultado.textContent = `O Herói de nome ${nomeHeroi} está no nível de ${nivel}`;