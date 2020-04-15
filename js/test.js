

/*const card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});*/
const nbrCards=17;
const max=8;
let indexOfRepeatedCards=1;
const divContainer=document.getElementById('cardContainer')
const divClassCard=document.querySelectorAll('.card')
let motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
const etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const cartesRetournees=[];
const nbPairesTrouvees=0;
const nro=0;
//console.log(divClassCard)
/*

VOIR FUNCTION ARRAY POUR LES NUMEROS DE LES IMAGES
function randomNumberCalculator(){
    const randomNumber=Math.floor(Math.random() * 8) + 1;
    const numberArray=[randomNumber];
    console.log(numberArray)
    return randomNumber
}
*/



    (function initialiseJeu() {
        divClassCard.forEach(card=>{
            let randomPos=Math.floor(Math.random()*16);
            console.log(card.style.order)
            card.style.order = randomPos;
        })
    })();


// la bouble for a etre encapsule dans une variable init qui va etre appeler avec le click de New Game
//function creerCartes(nro){
    console.log('appel de la methode creer cartes')
for (let index =1; index < nbrCards; index++) {


        divClassCard.forEach(card=>card.addEventListener( 'click',  flipped))


        }

        function flipped(){

            this.classList.toggle('is-flipped')
        }