export function alteratedTheme() {
  // buttons for modifications
  const btnAlteratedTheme = document.getElementById("btn-alterated-theme");
  const imageTheme = document.getElementById("imageTheme");
  // modifying the theme of html elements
  const headerContainer = document.getElementById("header-container");
  const mainContainer = document.getElementById("main-container");
  const textTheme = [...document.querySelectorAll("#text-theme")];
  const calculatorContainer = document.getElementById("calculator-container");
  const calculatorHeader = document.getElementById("calculator-header");
  const calculatorDisplay = document.getElementById("calculator-display");
  const displayInput = document.getElementById("display-input");
  const btnCalc = [...document.querySelectorAll(".btn-calc")];

  btnAlteratedTheme.addEventListener("click", () => {
    const currentIcon = imageTheme.getAttribute("src");
    if (currentIcon.includes("./imgs/moon-icon.svg")) {
      imageTheme.setAttribute("src", "./imgs/sun-icon.svg");
    } else {
      imageTheme.setAttribute("src", "./imgs/moon-icon.svg");
    }

    if (!headerContainer.classList.contains("dark-mode-container")) {
      headerContainer.classList.add("dark-mode-container");
    } else {
      headerContainer.classList.remove("dark-mode-container");
    }
    textTheme.forEach((element) => {
      if (!element.classList.contains("dark-mode-text")) {
        element.classList.add("dark-mode-text");
      } else {
        element.classList.remove("dark-mode-text");
      }
    });

    if (!mainContainer.classList.contains("dark-mode-container")) {
      mainContainer.classList.add("dark-mode-container");
    } else {
      mainContainer.classList.remove("dark-mode-container");
    }

    if (!calculatorContainer.classList.contains("dark-mode-container")) {
      calculatorContainer.classList.add("dark-mode-container");
    } else {
      calculatorContainer.classList.remove("dark-mode-container");
    }

    if (!calculatorHeader.classList.contains("dark-mode-container")) {
      calculatorHeader.classList.add("dark-mode-container");
    } else {
      calculatorHeader.classList.remove("dark-mode-container");
    }

    if ((!calculatorDisplay.classList.contains("dark-mode-container")) && (!calculatorDisplay.classList.contains('background-input'))) {
      calculatorDisplay.classList.add("dark-mode-container");
      calculatorDisplay.classList.add("background-input");
    } else {
      calculatorDisplay.classList.remove("dark-mode-container");
      calculatorDisplay.classList.remove("background-input");
    }

    if ((!displayInput.classList.contains("dark-mode-container")) && (!displayInput.classList.contains('background-input'))) {
      displayInput.classList.add("dark-mode-container");
      displayInput.classList.add("background-input");
    } else {
      displayInput.classList.remove("dark-mode-container");
      displayInput.classList.remove("background-input");
    }

    btnCalc.forEach((btn) => {
      if (!btn.classList.contains("dark-mode")) {
        btn.classList.add("dark-mode");
      } else {
        btn.classList.remove("dark-mode");
      }
    });
  });
}
