//variable dom
let taupe = document.querySelectorAll(".taupe");
let container = document.querySelector(".container");
let trouTaupe = document.querySelectorAll(".trouTaupe");
let content = document.querySelector(".content");
let score = document.querySelector(".score");
let titreScore = document.querySelector(".titreScore");
let titreVie = document.querySelector(".titreVie");
let nbVie = document.querySelector(".vie");

//variable
let vie = 5;
let scorePoint = 0;
let vitesseTaupe = 1200;
const taupeDiv = `<div class="taupe"></div>`;
const header = `
<div class="soleil"></div>
<div class="TableauScore">
    <div class="titreScore"></div>
    <div class="score"></div>
</div>
`;  

// creation d'un chiffre random
let randomTrou = function(trous){

    const rand = Math.floor(Math.random() * trous.length);

    const trou = trous[rand];

    return trou;
}

function scoreAffiche(){
    titreScore.innerHTML = `Score  `;
    score.innerHTML = `${scorePoint}`;
}
function vieAffiche(){
    titreVie.innerHTML = `Vie`;
    nbVie.innerHTML = `${vie}`;
}

function btnRestarted(){

    container.innerHTML =`
    <div class="trouTaupe" data-id="0"></div>
    <div class="trouTaupe" data-id="1"></div>
    <div class="trouTaupe" data-id="2"></div>
    <div class="trouTaupe" data-id="3"></div>
    <div class="trouTaupe" data-id="4"></div>
    <div class="trouTaupe" data-id="5"></div>`;

}

// boucle pour faire apparaître la taupe
setInterval( () => { 
    trouTaupe.forEach( element => { element.innerHTML= ""; } );

    randomTrou(trouTaupe).innerHTML=`<div class="taupe"></div>`;

    console.log("fonction11 :",scored(vitesseTaupe))

} , scored(vitesseTaupe) );

function scored(vitesse){
        if(scorePoint < 50)
            vitesse = 900;
        
        if(scorePoint >= 50 && scorePoint > 100)
            vitesse = 700;

        if(scorePoint >= 100 && scorePoint > 150)
            vitesse = 500;

        if(scorePoint >= 150 && scorePoint > 200)
             vitesse = 300;

        if(scorePoint >= 200 && scorePoint > 250)
            vitesse = 150;

        if(scorePoint >= 250)
            vitesse = 100;

        if(scorePoint >= 260)
        vitesse = 50;

    return vitesse
}

score.innerHTML = `${scorePoint}`;

trouTaupe.forEach(element => {
    element.addEventListener("click",function(){
        if(element.innerHTML !== taupeDiv){
            vie--;
        }
        if(vie == 0){
            titreScore.innerHTML = `Voici votre Score : `;
            score.innerHTML = `${scorePoint}`;
            container.innerHTML=`<h1>Vous avez perdu voici votre score : ${scorePoint} </h1>`
        }
        
        scoreAffiche();
        vieAffiche();

        console.log("fonction :",scored(vitesseTaupe));

        scorePoint += 5;
    });
});

scoreAffiche();
vieAffiche();




