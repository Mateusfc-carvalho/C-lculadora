export function togglerTheme() {
  const btnAlteratedTheme = document.getElementById("btn-alterated-theme");
  const imageTheme = document.getElementById("imageTheme");

  const headerContainer = document.getElementById("header-container");
  const mainContainer = document.getElementById("main-container");
  const textTheme = [...document.querySelectorAll(".text-theme")];
  const calculatorContainer = document.getElementById("calculator-container");
  const calculatorHeader = document.getElementById("calculator-header");
  const calculatorDisplay = document.getElementById("calculator-display");
  const displayInput = document.getElementById("display-input");
  const btnCalc = [...document.querySelectorAll(".btn-calc")];

  // Função que aplica o tema
  const aplicarTema = (modoDark) => {
    if (modoDark) {
      imageTheme.setAttribute("src", "./imgs/sun-icon.svg");

      headerContainer.classList.add("dark-mode-container");
      mainContainer.classList.add("dark-mode-container");
      calculatorContainer.classList.add("dark-mode-container");
      calculatorHeader.classList.add("dark-mode-container");
      calculatorDisplay.classList.add("dark-mode-container", "background-input");
      displayInput.classList.add("dark-mode-container", "background-input");

      textTheme.forEach((element) => {
        element.classList.add("dark-mode-text");
        textTheme[0].classList.add("efect-text");
      });

      btnCalc.forEach((btn) => btn.classList.add("background-input"));

      localStorage.setItem("theme", "dark");
    } else {
      imageTheme.setAttribute("src", "./imgs/moon-icon.svg");

      headerContainer.classList.remove("dark-mode-container");
      mainContainer.classList.remove("dark-mode-container");
      calculatorContainer.classList.remove("dark-mode-container");
      calculatorHeader.classList.remove("dark-mode-container");
      calculatorDisplay.classList.remove("dark-mode-container", "background-input");
      displayInput.classList.remove("dark-mode-container", "background-input");

      textTheme.forEach((element) => {
        element.classList.remove("dark-mode-text");
        textTheme[0].classList.remove("efect-text");
      });

      btnCalc.forEach((btn) => btn.classList.remove("background-input"));

      localStorage.setItem("theme", "light");
    }
  };

  // Aplica o tema salvo ao carregar
  const temaSalvo = localStorage.getItem("theme");
  aplicarTema(temaSalvo === "dark");

  // Alternar tema ao clicar
  btnAlteratedTheme.addEventListener("click", () => {
    const temaAtual = localStorage.getItem("theme") === "dark";
    aplicarTema(!temaAtual); // alterna
  });
}

