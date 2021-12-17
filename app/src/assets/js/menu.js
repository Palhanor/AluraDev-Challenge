var menuTrigger = document.querySelector('.header__menu');
var menu = document.querySelector('.menu');
var menuIcon = document.querySelector('.header__menu--icon');
var header = document.querySelector('.header');

var searchTrigger = document.querySelector('.header__search');
var logo = document.querySelector('.header__logo');
var searchInput = document.querySelector('.header__search--input');
var searchIcon = document.querySelector('.header__search--icon');

var activatedMenu = false;
menuTrigger.addEventListener('click', function() {
    if(!activatedMenu) {
        menu.style.right = "1rem";
        activatedMenu = !activatedMenu;
        menuIcon.src = "./assets/img/icon/icon-close.svg";
    } else {
        menu.style.right = "-70vw";
        activatedMenu = !activatedMenu;
        menuIcon.src = "./assets/img/icon/icon-burguer.svg";
    }
})

var activatedSearch = false;
searchIcon.addEventListener('click', function() {
    if(!activatedSearch) {
        logo.style.display = "none"; // Apaga a logo
        menuTrigger.style.display = "none"; // Apaga o burguer icon
        searchInput.style.display = "block"; // Mostra o input de busca
        searchTrigger.style.marginRight = "0"; // Alinha area de busca com a margem direita
        searchTrigger.style.width = "100%"; // Faz a area de busca ser 100%
        document.querySelector('.header__navigation').style.width = "100%"; // Faz o header ficar 100%
        searchIcon.src = "./assets/img/icon/icon-close.svg";
        activatedSearch = !activatedSearch;
    } else {
        logo.style.display = "block";
        menuTrigger.style.display = "block";
        searchInput.style.display = "none";
        searchTrigger.style.marginRight = "3rem";
        searchTrigger.style.width = "auto";
        document.querySelector('.header__navigation').style.width = "auto";
        searchIcon.src = "./assets/img/icon/icon-search.svg";
        activatedSearch = !activatedSearch;
    }
})



