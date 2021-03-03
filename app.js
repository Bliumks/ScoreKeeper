const p1 = {
    score: 0,
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Score')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Score')
}
const resetButton = document.querySelector('#reset')

const inp = document.querySelector('#end')



let winScore = 5;
let endGame = false;

function updateScore(main, second){
    if(!endGame){
        main.score += 1;
        if (main.score == winScore){
            endGame = true;
            main.display.classList.add('has-text-success');
            second.display.classList.add('has-text-danger');
            main.button.disabled = true;
            second.button.disabled = true;
        }
        main.display.textContent = main.score;
    }
}

inp.addEventListener('change', function(){
    winScore = parseInt(this.value)
    reset();
})
p1.button.addEventListener('click', function (){
    updateScore(p1, p2)
})



p2.button.addEventListener('click', function (){
    updateScore(p2, p1)
})

resetButton.addEventListener('click', function (){
    reset()
})

function reset (){
    p2.score = 0;
    p1.score = 0;
    p2.display.textContent = p2.score;
    p1.display.textContent = p1.score;
    endGame = false;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
}