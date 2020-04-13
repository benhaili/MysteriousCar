


/*window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)
*/
    // Code a exécuter


/*const card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});*/
const nbrCards=17;
const max=8;
let nb=1;
const bodyElement=document.getElementsByTagName('body')

for (let index = 1; index < nbrCards; index++) {
    /*creation de la premier balise*/
    const cardsAcreer=document.createElement('div')
    cardsAcreer.classList.add('scene','scene--card')
    document.body.appendChild(cardsAcreer)
    /*creation de la deuxime balise*/
    const divClassCard=document.createElement('div')
    divClassCard.classList.add('card')
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
    if (index<=8) {
    const imgBack=document.createElement('img')
    imgBack.src='photos/Car'+index+'.png'
    imgBack.setAttribute("alt", "Car"+index);
    divFaceBack.appendChild(imgBack)

    }else if (index===8) {
    const imgBack=document.createElement('img')
    imgBack.src='photos/Car'+nb+'.png'
    imgBack.setAttribute("alt", "Car"+nb);
    divFaceBack.appendChild(imgBack)
    console.log(nb)
    }
    nb++
}

/*}, false)*/
