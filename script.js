import { togglerTheme } from "./theme-light.js";
togglerTheme();

const display = document.getElementById("display-input");
const clearBtn = document.getElementById("clear");
const numBtns = document.querySelectorAll(".button-calculation");
const opBtns  = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");

// 1. Limpar
clearBtn.addEventListener("click", () => {
  display.value = "0";
});

// 2. Números e ponto
numBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const char = btn.textContent;
    // Se for o primeiro dígito, substitui o "0"
    if (display.value === "0") {
      display.value = char;
    } else {
      display.value += char;
    }
  });
});

// 3. Operadores
opBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // converte "x" e "÷" para JS
    let op = btn.textContent === "x" ? "*"
           : btn.textContent === "÷" ? "/"
           : btn.textContent;
    const last = display.value.slice(-1);
    // se o último já for operador, ignora
    if (/[+\-*/]/.test(last)) return;
    display.value += op;
  });
});

// 4. Resultado
equalBtn.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
});
