// Adicionar todos os cards que serão gerados

const cards = [
    {
        color: "#D37E7E",
        content: `
        var likeButton = document.querySelectorAll('.card__likes-icon');

        likeButton.forEach(like => {
            like.addEventListener('click', function(){
                console.log(this.src);
                if (this.src == "file:///C:/Users/Computador/Desktop/alura-challenge-front-end/app/src/assets/img/icon/icon-heart.svg") {
                    this.src = "./assets/img/icon/icon-heart_active.svg";
                    var numLikes = parseInt(this.parentElement.childNodes[3].textContent);
                    numLikes++;
                    this.parentElement.childNodes[3].textContent = numLikes;
                } else {
                    this.src = "./assets/img/icon/icon-heart.svg";
                    var numLikes = parseInt(this.parentElement.childNodes[3].textContent);
                    numLikes--;
                    this.parentElement.childNodes[3].textContent = numLikes;
                }
            })
        });`,
        title: "Sistema de like",
        description: "Função usada para controlar o sistema de like nos códigos.",
        tag: "Javascript",
        likes: 0,
        coments: 0,
        userImage: "./assets/img/user-lucas.jpg",
        userName: "@palhano_o"
    }
]