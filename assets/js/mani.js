/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

//creare una griglia di 100 caselle


const createButtonEl = document.getElementById('create_button');

createButtonEl.addEventListener('click' , function(){      
    const difficultChoice = Number(document.getElementById('difficult_choice').value);

    // the choose the difficult of the game (easy / medium / hard)
    let difficultGradient; 
    let numberOfSquares;

    if(difficultChoice === 1){
        difficultGradient = 'square_easy';
        numberOfSquares = 100;
    } else if(difficultChoice === 2){
        difficultGradient = 'square_medium';
        numberOfSquares = 81;
    } else if(difficultChoice === 3){
        difficultGradient = 'square_difficult';
        numberOfSquares = 49;
    }  else {}  

    // create the squares grid (100-easy / 91-medium / 49-hard)
    for (let i = 0; i < numberOfSquares; i++) {

        const containerEl = document.querySelector('.container');
        const creatingSquare = `<div class="square ${difficultGradient} d-flex justify-content-center align-items-center rounded-2"><h5>${i + 1}</h5>
        </div>`
        containerEl.insertAdjacentHTML('beforeend' , creatingSquare);    
    }
    //the user can interact with the grid changing the squares color
    
    const allSquares = document.querySelectorAll('.square');
    const arrayRandom = bombs(numberOfSquares);
    //console.log(arrayRandom);
    
    let k = 0;
        for (let i = 0; i < allSquares.length ; i++) {
            let thisCell = allSquares[i];
            thisCell.addEventListener('click', function(){

                this.classList.toggle('clicked');

                if(numberOfSquares===49 && k===(numberOfSquares-16)){
                    document.querySelector('h3').innerHTML=`CONGRATS`
                    document.querySelector('h1').innerHTML=`YOU WON`
                    document.querySelector('h6').innerHTML=`YOU HAVE CLICKED ${k+1} TIMES`
                } else if (numberOfSquares===82 && k===(numberOfSquares-16)){
                    document.querySelector('h3').innerHTML=`CONGRATS`
                    document.querySelector('h1').innerHTML=`YOU WON`
                    document.querySelector('h6').innerHTML=`YOU HAVE CLICKED ${k+1} TIMES`
                } else if (numberOfSquares===100 && k===(numberOfSquares-16)){
                    document.querySelector('h3').innerHTML=`CONGRATS`
                    document.querySelector('h1').innerHTML=`YOU WON`
                    document.querySelector('h6').innerHTML=`YOU HAVE CLICKED ${k+1} TIMES`
                }

                if(arrayRandom.includes(i + 1)){
                    thisCell.classList.remove('clicked');                     
                    thisCell.classList.add('square_bomb');                  
                    
                    document.querySelector('h3').innerHTML=`YOU FOUND THE BOMB`
                    document.querySelector('h1').innerHTML=`GAME OVER`
                    document.querySelector('h6').innerHTML=`YOU HAVE CLICKED ${k} TIMES`

                }

                k++;
                
                console.log(numberOfSquares); 

                
                
            })
}})





// function bombs create 16 random numbers due to difficult selected by the user
function bombs(numberOfSquares) {
    let bombsArray = [];

    let k = 0;
    while (k < 16) {
        let randomNumberAnchor = Math.floor(Math.random() * numberOfSquares) + 1;    
        if (!(bombsArray.includes(randomNumberAnchor))) {//verifico se il numero non sia già presente
            bombsArray.push(randomNumberAnchor); //aggiungo il numero casuale all'array    
            k++  
        }      
    }     
    return bombsArray;
}


//In seguito l'utente clicca su una cella:
//se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba la cella si colora di rosso e la partita termina.

//Altrimenti la cella cliccata si colora di azzurro. l'utente può continuare a cliccare sulle altre celle.

//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. 





