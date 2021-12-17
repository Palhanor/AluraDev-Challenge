// Criar sistema de criar cards
var createNewCard = document.querySelector('.project-form__submit');

var cardContainerColor = document.querySelector('.project-form__style--color');
var cardContent = document.querySelector('.code-editor__input');
var cardTitle = document.querySelector('.project-form__info--name');
var cardDescription = document.querySelector('.project-form__info--description');
var cardLanguage = document.querySelector('.project-form__style--type');

createNewCard.addEventListener('click', function(event) {
    event.preventDefault();
    if (cardContent.value != "" && cardTitle != "" && cardDescription != "") {
        window.localStorage.setItem("cardContainerColor", `${cardContainerColor.value}`);
        localStorage.setItem("cardContent", `${cardContent.value}`);
        localStorage.setItem("cardTitle", `${cardTitle.value}`);
        localStorage.setItem("cardDescription", `${cardDescription.value}`);
        localStorage.setItem("cardLanguage", `${cardLanguage.value}`);
    
        console.log(localStorage.getItem("cardContainerColor"));
        console.log(localStorage.getItem("cardContent"));
        console.log(localStorage.getItem("cardTitle"));
        console.log(localStorage.getItem("cardDescription"));
        console.log(localStorage.getItem("cardLanguage"));
    }
})