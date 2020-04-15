

/*const card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});*/


const divContainer=document.getElementById('cardContainer')
const divClassCard=document.querySelectorAll('.card')
let motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
const etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const cartesRetournees=[];
const nbPairesTrouvees=0;
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
    imgSrc[i].setAttribute("nroCarte",motifsCartes[indice]);
    imgSrc[i].src = 'photos/Car' + motifsCartes[indice] + '.png '
   //console.log(imgSrc[i].getAttribute('nroCarte'))
    indice++
    }
}

    console.log('appel de la methode creer cartes')
for (let index =1; index < 17 ; index++) {
        divClassCard.forEach(card=>card.addEventListener( 'click',  flipped))
        }
        function flipped(){
            this.classList.toggle('is-flipped')

        }


