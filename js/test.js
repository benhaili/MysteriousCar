

/*const card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});*/
const nbrCards=17;
const max=8;
let indexOfRepeatedCards=1;
const divContainer=document.getElementById('cardContainer')
let motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
const etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const cartesRetournees=[];
const nbPairesTrouvees=0;
const nro=0;
/*

VOIR FUNCTION ARRAY POUR LES NUMEROS DE LES IMAGES
function randomNumberCalculator(){
    const randomNumber=Math.floor(Math.random() * 8) + 1;
    const numberArray=[randomNumber];
    console.log(numberArray)
    return randomNumber
}
*/
function initialiseJeu(motifsCartes){


    /*YAHIA ICI IL FAUDRAIT STP UNE function qui va melanger les valeurs du tableau motifCartes et me retourner un tableau melangee */
   
       
    



}
// la bouble for a etre encapsule dans une variable init qui va etre appeler avec le click de New Game
//function creerCartes(nro){
    console.log('appel de la methode creer cartes')
for (let index =1; index < nbrCards; index++) {


        /*creation de la premier balise*/
        const cardsAcreer=document.createElement('div')
        cardsAcreer.classList.add('scene','scene--card')
        divContainer.appendChild(cardsAcreer)
        /*creation de la deuxime balise*/
        const divClassCard=document.createElement('div')
        divClassCard.classList.add('card')
        divClassCard.addEventListener( 'click',  function() {
            divClassCard.classList.toggle('is-flipped');
          });
        cardsAcreer.appendChild(divClassCard)

        /* creation de la balise qui contien la image frontal  */

        const divFaceFront=document.createElement('div')
        divFaceFront.classList.add('card__face','card__face--front')
        divClassCard.appendChild(divFaceFront)

        /*creation et inclusion de la img dans la div class face-front */

        const imgFront=document.createElement('img')
        imgFront.src='photos/Interrogation.png'
        imgFront.setAttribute("alt", "Interrogation");
        divFaceFront.appendChild(imgFront)

        /*Creation de la  balise qui contient la image arriere */

        const divFaceBack=document.createElement('div')
        divFaceBack.classList.add('card__face','card__face--back')
        divClassCard.appendChild(divFaceBack)


        /*creation et inclusion de la img dans la div class face-back */
        if (index <= max) {
        const imgBack=document.createElement('img')
        imgBack.src='photos/Car'+index+'.png'
        imgBack.setAttribute("alt", "Car"+index);
        divFaceBack.appendChild(imgBack)

        }else{
        const imgBack=document.createElement('img')
        imgBack.src='photos/Car'+indexOfRepeatedCards+'.png'
        imgBack.setAttribute("alt", "Car"+indexOfRepeatedCards);
        divFaceBack.appendChild(imgBack)
        indexOfRepeatedCards++
        }


 }
//}
 const imgCartes=document.getElementById("cardContainer").getElementsByTagName("img");
 console.log(imgCartes)
 for(let i=0;i<imgCartes.length;i++){
	imgCartes[i].noCarte=i; //Ajout de la propriété noCarte à l'objet img
	imgCartes[i].onclick=function(){
		controleJeu(this.noCarte);
    }
}
