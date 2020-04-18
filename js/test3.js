const motifsCartes = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
let bestTime=0;
const max = 9
const messageWin = document.getElementById('winningMessage')
const temps = document.getElementById('temps')
let nbPairesTrouvees = 0
let cardFlipped = false
let blockFlip = false
let car1, car2
const champTextPairesTrouve = document.getElementById('paire')
const restart=document.getElementById("restartButton")
const imgSrc = document.getElementById('cardContainer').getElementsByClassName('card__face--back')
 let car = document.getElementById('cardContainer')
// const divContainer = document.getElementById('cardContainer')
const card = document.querySelectorAll('.card')
const bouton = document.getElementsByClassName('btn')
bouton[0].addEventListener('click', initialiserJeu)
let counter=0
let timeLeft=100
function setup(){
    let timer=document.getElementById('temps')
    timer.innerHTML=timeLeft-counter
function timeIt(){
counter++;
timer.innerHTML=timeLeft-counter
if(counter==timeLeft){

    clearInterval(update)
    console.log(messageWin)
    document.getElementById("cardContainer").style.display='none'
    car.classList.add('hide')
    messageWin.classList.add('show')
    console.log( document.getElementById("cardContainer"))

}
else if(nbPairesTrouvees==8){
    document.getElementById('winning-text').innerHTML='Bravo Vous Avez gagner</br>   Votre temps est '+timer.innerHTML
    if (bestTime===0) {
        bestTime=timer.innerHTML
        document.getElementById('winning-text').innerHTML='Bravo Vous Avez Gagner </br>  Votre temps est '+timer.innerHTML + '</br> Meilleur Temps '+bestTime

    }else if (timer.innerHTML<bestTime) {
        bestTime=timer.innerHTML
        document.getElementById('winning-text').innerHTML='Bravo Vous Avez Gagner </br>  Votre temps est '+timer.innerHTML + '</br> Meilleur Temps '+bestTime
    }
    clearInterval(update)
    console.log( document.getElementById("winning-text"))

    document.getElementById("cardContainer").style.display='none'
    car.classList.add('hide')
    messageWin.classList.add('show')

}

}
update=setInterval(timeIt,1000)
}

function initialiserJeu () {
    setup()

    bouton[0].innerHTML = 'Arreter Partie'
    bouton[0].addEventListener('click', arreterPartie)

    /* MELANGEUR DE CHIFFRES DES CARTES  */
    for (let i = motifsCartes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = motifsCartes[i]
        motifsCartes[i] = motifsCartes[j]
        motifsCartes[j] = temp
    }

    /* AJOUTER DES CHIFFRES ALEATOIRES AU SRC */
    for (let i = 0; i < imgSrc.length; i++) {
        imgSrc[i].src = 'photos/Car' + motifsCartes[i] + '.png '
        imgSrc[i].setAttribute('alt', motifsCartes[i])
        card[i].setAttribute('data-car', motifsCartes[i])
        card[i].addEventListener('click', flippe)
    }
    restart.addEventListener('click',restartFunction)
    function restartFunction(){
        clearInterval(update)
       // console.log( document.getElementById("cardContainer"))
        document.getElementById("cardContainer").style.display='flex'
        document.getElementById("cardContainer").style.flexWrap='wrap'
        messageWin.classList.remove('show')
        location.reload()

       // document.getElementById("cardContainer")
       // initialiserJeu ()
    }
    function flippe () {
        console.log(blockFlip)
        if (blockFlip) return
        console.log('this', this)
        console.log('car1', car1)
        if (this === car1) return
        this.classList.add('is-flipped')
        if (!cardFlipped) {
            cardFlipped = true
            car1 = this
        } else {
            cardFlipped = false
            car2 = this
            checkMatch()
        }
    }
    function checkMatch () {
        if (car1.dataset.car === car2.dataset.car) {
            car1.removeEventListener('click', flippe)
            car2.removeEventListener('click', flippe)
            nbPairesTrouvees = nbPairesTrouvees + 1
            champTextPairesTrouve.setAttribute('placeholder', nbPairesTrouvees)
            win()
            initialiserBoard()
        } else {
            removeFlip()
        }
    }
    function removeFlip () {
        blockFlip = true
        setTimeout(() => {
            car1.classList.remove('is-flipped')
            car2.classList.remove('is-flipped')
            initialiserBoard()
        }, 800)
    }
    function initialiserBoard () {
        blockFlip = false
        cardFlipped = false

        car1 = null
        car2 = null
        //setup()
    }
}
function win () {
    if (nbPairesTrouvees === max) {
        messageWin.innerHTML = 'Felicitations Vous Avez Gagnier'
    }
}
function arreterPartie () {
    location.reload()
}
/*
function timer () {
    let currentTimer = 0
    let interval = 0
    let lastUpdateTime = new Date().getTime()
    // const start = s.querySelector('button.start')
     const stop = s.querySelector('button.stop')
    const reset = s.querySelector('button.reset')
    const mins = s.querySelector('span.minutes')
    const secs = s.querySelector('span.seconds')
    const cents = s.querySelector('span.centiseconds')

    // start.addEventListener('click', startTimer)
    // stop.addEventListener('click', stopTimer)

    function pad (n) {
        return ('00' + n).substr(-2)
    }

    function update () {
        var now = new Date().getTime()
        var dt = now - lastUpdateTime

        currentTimer += dt

        var time = new Date(currentTimer)

        temps.innerHTML = pad(time.getMinutes()) + ' ' + pad(time.getSeconds())
        // secs.innerHTML = pad(time.getSeconds())
        // cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10))

        lastUpdateTime = now
    }
    function startTimer () {
        if (!interval) {
            lastUpdateTime = new Date().getTime()
            interval = setInterval(update, 1)
        }
    }

    function stopTimer () {
        clearInterval(interval)
        interval = 0
    }
} */
