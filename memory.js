// Saves the scores of the players
let playerOneScore = {
    wins: 0,
    pairs: 0
};

let playerTwoScore = {
    wins: 0,
    pairs: 0
};


let card1Face = false;
let card2Face = false;

// All buttons as const
const button = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

// functions to spin the cards
button.addEventListener('click', () => {
    if(!card1Face){
        button.innerHTML = `
            <img src="pictures/panda.jpg">
        `;
        card1Face = true;
    } else {
        button.innerHTML = 'Memory';
        card1Face = false;
    }
    
});
button2.addEventListener('click', () => {
    if(!card1Face){
        button2.innerHTML = `
            <img src="pictures/bear.jpg">
        `;
        card1Face = true;
    } else {
        button2.innerHTML = 'Memory';
        card1Face = false;
    }
    
});

// function to check if two cards have the same picture
