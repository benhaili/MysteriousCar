

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
let cardFlipped=false;
let blockFlip=false;
let car1,car2;
const imgSrc=document.getElementsByClassName('card__face--back')
const bouton=document.getElementsByClassName('btn')
bouton[0].addEventListener('click', initialiserJeu);

function initialiserJeu(){

let indice=0;
/* MELANGEUR DE CHIFFRES DES CARTES  */
for(let i = motifsCartes.length-1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = motifsCartes[i]
    motifsCartes[i] = motifsCartes[j]
    motifsCartes[j] = temp
  }
/* AJOUTER DES CHIFFRES ALEATOIRES AU SRC */
for(var i=0;i<imgSrc.length;i++){
    imgSrc[i].src = 'photos/Car' + motifsCartes[indice] + '.png '
    indice++
    }
/*-- CHANGEMENT DU BOUTTON A ARRETER ----*/
    bouton[0].innerHTML='Arreter'
    bouton[0].value='arreter'
}
    console.log('appel de la methode creer cartes')
for (let index =1; index < nbrCards; index++) {

    divClassCard.forEach(card=>card.addEventListener( 'click',  flipped))



        }

        function flipped(){
        if(blockFlip) return;
        console.log('this',this)
        console.log('car1',car1)
        if (this === car1) return;
            this.classList.add('is-flipped')
            if(!cardFlipped){
                cardFlipped=true;
                car1=this

        }
 else{
     cardFlipped=false
     car2=this
     checkMatch()

 }}


function checkMatch(){
    if(car1.dataset.car===car2.dataset.car){
        car1.removeEventListener('click',flipped)
        car2.removeEventListener('click',flipped)
        blockFlip=false
        cardFlipped=false
        car1=null
        car2=null
     }else{
        blockFlip=true;
        setTimeout(()=>{

            car1.classList.remove('is-flipped')
            car2.classList.remove('is-flipped')
            blockFlip=false
            cardFlipped=false
            car1=null
            car2=null
        },800)

     }
}