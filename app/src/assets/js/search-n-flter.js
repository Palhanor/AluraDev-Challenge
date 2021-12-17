var card = document.querySelectorAll('.card');

// Sistema de busca
var searchInput = document.querySelector('.header__search--input');
var removeSearch = document.querySelector('.projects__search');
var regExSearched = document.querySelector('.projects__search-str');


var buscando = false;
const ENTER = 13;
searchInput.addEventListener('keydown', function(event) {
    if (event.keyCode == ENTER && searchInput.value != "") {
        // Remove o filtro caso esteja aplicado
        if (filtrando) {
            removeFilter.click();
        }
        // Pega o valor do input
        var searchValue = searchInput.value.toLowerCase();
        // deixa todos os card visiveis e remove os que nao exibem o que foi buscado
        for (let i = 0; i < card.length; i++) {
            card[i].style.display = "block";
            if (card[i].lastElementChild.children[0].textContent.toLowerCase().search(searchValue) == -1 && (card[i].lastElementChild.children[1].textContent.toLowerCase().search(searchValue)) == -1) {
                card[i].style.display = "none";
            }
        }
        removeSearch.style.display = "block";
        regExSearched.textContent = searchValue;
        searchInput.value = "";
        buscando = true;
    }
})

removeSearch.addEventListener('click', function() {
    for (let i = 0; i < card.length; i++) {
        card[i].style.display = "block";
    }
    removeSearch.style.display = "none";
    buscando = false;
})

/***************************************************************/

// SISTEMA DE FILTRO

var tag = document.querySelectorAll('.card__info-tag');
var removeFilter = document.querySelector('.projects__filter');
var languageSelected = document.querySelector('.projects__filter-language');

var filtrando = false;
tag.forEach(language => {
    language.addEventListener('click', function() {
        if (buscando) {
            removeSearch.click();
        }
        for (let i = 0; i < card.length; i++) {
            if (card[i].lastElementChild.children[2].textContent != this.textContent) {
                card[i].style.display = "none";
            }
        }
        removeFilter.style.display = "block";
        languageSelected.textContent = this.textContent;
        filtrando = true;
    })
})

removeFilter.addEventListener('click', function() {
    if (filtrando) {
        for (let i = 0; i < card.length; i++) {
            card[i].style.display = "block";
        }
        removeFilter.style.display = "none";
        filtrando = false;
    }
})