// Dados dos quatro cards iniciais em formato JSON

const cards = [
    {
        color: "#D37E7E",
        content: 
`
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
});
`,
        title: "Sistema de like",
        description: "Função usada para controlar o sistema de like nos códigos.",
        tag: "Javascript",
        likes: 0,
        coments: 0
    },
    {
        color: "#8CBACF",
        content: 
`
// CORES
$background: #051D3B;
$editor-background: #6BD1FF;
$black: #000;
$white: #FFF;
$button: #5081FB;
$dark-gray: #292936;
$mac-red: #FF5F56;
$mac-yellow: #FFBD2E;
$mac-green: #27C93F;
$gray: #2D415B;
    
// COMPONENTES
$border-radius: 8px;
$container-padding: 1.5rem 1rem;
    
// RESPONSIVIDADE
$mobile: 375px;
$tablet: 768px;
$desktop: 1440px;
    
@mixin tablet {
    @media (min-width: $tablet) {
        @content;
    }
}
    
@mixin desktop {
    @media (min-width: $desktop) {
        @content;
    }
}
`,
        title: "Variáveis e mixins",
        description: "Estes são os parâmetros em SASS usados como base para a execução deste projeto.",
        tag: "SCSS",
        likes: 0,
        coments: 0
    },
    {
        color: "#5EA16C",
        content: 
`
// Create a new MySQL database connection
if (!$con = new mysqli('localhost', $username, $password, $database)) {
    die('An error occurred while connecting to the MySQL server! ' . $con->connect_error);
}

// Create an array of MySQL queries to run
$sql = array(
    'DROP TABLE IF EXISTS \`backup_db.backup_table\`;',
    'CREATE TABLE \`backup_db.backup_table\` SELECT * FROM \`live_db.live_table\`'
);

// Run the MySQL queries
if (sizeof($sql) > 0) {
    foreach ($sql as $query) {
        if (!$con->query($query)) {
            die('A MySQL error has occurred! ' . $con->error);
        }
    }
}

$con->close();
`,
        title: "Exemplo de PHP",
        description: "Eu não estudei PHP, então precisei pegar um exemplo na internet.",
        tag: "PHP",
        likes: 0,
        coments: 0
    },
    {
        color: "#E2EE87",
        content: 
`
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
`,
        title: "Sistema de controle do menu",
        description: "Aqui se encontra o sistema que controla o menu do site no modo mobile.",
        tag: "Javascript",
        likes: 0,
        coments: 0
    }
]