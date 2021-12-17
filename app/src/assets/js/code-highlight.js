var isHighlight = false;
var showCode = document.querySelector('.code-editor__submit');
var editorInput = document.querySelector('.code-editor__input');
var codeContainer = document.querySelector('.code-editor__highlight');
var codeHighlighted = document.querySelector('.code-editor__highlight-code');
var selectedLanguage = document.querySelector('.project-form__style--type');

showCode.addEventListener('click', function(event) {
    event.preventDefault();
    if (!isHighlight) {
        editorInput.style.display = "none"; //estilo
        codeContainer.style.display = "block"; //estilo
        codeHighlighted.textContent = editorInput.value;
        codeHighlighted.classList.remove('language-typescript'); //simplificar
        codeHighlighted.classList.remove('language-javascript'); //simplificar
        codeHighlighted.classList.remove('language-php'); //simplificar
        codeHighlighted.classList.remove('language-html'); //simplificar
        codeHighlighted.classList.remove('language-css'); //simplificar
        codeHighlighted.classList.remove('language-scss'); //simplificar
        codeHighlighted.classList.add(`language-${selectedLanguage.value.toLowerCase()}`);
        hljs.highlightElement(codeHighlighted);
        showCode.textContent = "Voltar a editar código";
        showCode.style.backgroundColor = "#96B9FD"; //estilo
        showCode.style.color = "black"; //estilo
        isHighlight = !isHighlight;
    } else {
        editorInput.style.display = "block"; //estilo
        codeContainer.style.display = "none"; //estilo
        showCode.textContent = "Visualizar com o highlight";
        showCode.style.backgroundColor = "rgba(80, 129, 251, 0.08)"; //estilo
        showCode.style.color = "white"; //estilo
        isHighlight = !isHighlight;
    }
})