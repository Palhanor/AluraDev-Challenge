// CRIA OS CARDS

// var cardList = document.querySelector('.projects__list');

// function createCards() {
//     for (let i = 0; i < cards.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.classList.add('projects__card');
//         listItem.classList.add('card');
    
//         var containerCode = document.createElement('div');
//         containerCode.classList.add('card__container');
//         containerCode.style.backgroundColor = cards[i].color;
        
//         var consoleScreen = document.createElement('div');
//         consoleScreen.classList.add('card__console');
        
//         var macIcons = document.createElement('div');
//         macIcons.classList.add('card__console-header');
        
//         var codeContent = document.createElement('code');
//         codeContent.classList.add('card__code');
//         codeContent.textContent = cards[i].content;
    
//         var cardInfo = document.createElement('div');
//         cardInfo.classList.add('card__info');
    
//         var cardTitle = document.createElement('h2');
//         cardTitle.classList.add('card__info-title');
//         cardTitle.textContent = cards[i].title;
        
//         var cardDescription = document.createElement('p');
//         cardDescription.classList.add('card__info-description');
//         cardDescription.textContent = cards[i].description;
    
//         var cardTag = document.createElement('span');
//         cardTag.classList.add('card__info-tag');
//         cardTag.classList.add(`card__info-tag--${cards[i].tag.toLocaleLowerCase()}`);
//         cardTag.textContent = cards[i].tag;
    
//         var cardInteractions = document.createElement('div');
//         cardInteractions.classList.add('card__info-interactions');
        
//         var interactionContainer = document.createElement('div');
//         interactionContainer.classList.add('card__interaction-container');
        
//         var commentsArea = document.createElement('div');
//         commentsArea.classList.add('card__comments');
    
//         var commentsIcon = document.createElement('img');
//         commentsIcon.classList.add('card__comments-icon');
//         commentsIcon.src = "./assets/img/icon/icon-comment.svg";
    
//         var commentsNum = document.createElement('span');
//         commentsNum.classList.add('card__comments-num');
//         commentsNum.textContent = cards[i].coments;
    
//         var likesArea = document.createElement('div');
//         likesArea.classList.add('card__likess');
    
//         var likesIcon = document.createElement('img');
//         likesIcon.classList.add('card__likes-icon');
//         likesIcon.src = "./assets/img/icon/icon-heart.svg";
    
//         var likesNum = document.createElement('span');
//         likesNum.classList.add('card__likes-num');
//         likesNum.textContent = cards[i].likes;
    
//         var profile = document.createElement('div');
//         profile.classList.add('card__profile');
        
//         var userImg = document.createElement('img');
//         userImg.classList.add('card__profile-image');
//         userImg.src = cards[i].userImage;
        
//         var userNickname = document.createElement('p');
//         userNickname.classList.add('card__profile-username');
//         userNickname.textContent = cards[i].userName;
    
//         cardList.appendChild(listItem);
//         listItem.appendChild(containerCode);
//         containerCode.appendChild(consoleScreen);
//         consoleScreen.appendChild(macIcons);
//         consoleScreen.appendChild(codeContent);
//         listItem.appendChild(cardInfo);
//         cardInfo.appendChild(cardTitle);
//         cardInfo.appendChild(cardDescription);
//         cardInfo.appendChild(cardTag);
//         cardInfo.appendChild(cardInteractions);
//         cardInteractions.appendChild(interactionContainer);
//         interactionContainer.appendChild(commentsArea);
//         commentsArea.appendChild(commentsIcon);
//         commentsArea.appendChild(commentsNum);
//         interactionContainer.appendChild(likesArea);
//         likesArea.appendChild(likesIcon);
//         likesArea.appendChild(likesNum);
//         cardInteractions.appendChild(profile);
//         profile.appendChild(userImg);
//         profile.appendChild(userNickname);
//     }
// }

// createCards();

// Fazer alteracao com o like
var likeButton = document.querySelectorAll('.card__likes-icon');

likeButton.forEach(like => {
    like.addEventListener('click', function(){
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
});