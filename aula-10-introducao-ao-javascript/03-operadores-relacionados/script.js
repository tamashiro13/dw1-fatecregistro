// JAVASCRIPT
const nome = window.prompt("Qual é o seu nome?");
const idade = Number(window.prompt("Qual é a sua idade?"));
const hobby = window.prompt("Qual é o seu hobby?");
const sexo = window.prompt(
  "Qual é o seu sexo? Digite M (masculino) F (feminino)",
);
const ano = window.prompt("Qual ano você nasceu?");

document.writeln(`Olá ${nome}!`);

// OPERADOR TERNÁRIO
let resultado = idade < 18 ? "menor" : "menor";

document.writeln(`<br> Você é <strong> ${resultado} </strong> de idade.`);

// toLawerCase joga a string toda para letras minúsculas
resultado =
  hobby.toLocaleLowerCase() != "estudar"
    ? "Não seria melhor estudar?"
    : "Você vai longe!";

document.writeln(`<br> Seu hobby é ${hobby}, ${resultado}`);
// toUperCase joga a string toda para letras maiúsculas
resultado = sexo.toUpperCase() == "M" ? "o" : "a";
document.writeln(`<br> Prazer em conhece-l${resultado}!`);

resultado = ano >= 2000 ? "no" : "antes do";
document.writeln(
  `<br> Você nasceu <strong>${resultado} segundo milênio</strong>`,
);
