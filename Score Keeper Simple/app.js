// const score = document.querySelector("#score")
const firstPlayerScore =  document.querySelector('#firstPlayerScore');
const secondPlayerScore = document.querySelector('#secondPlayerScore');
let firstPlayerScoreInt = parseInt(firstPlayerScore.innerText);
let secondPlayerScoreInt = parseInt(secondPlayerScore.innerText);

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btnReset = document.querySelector("#btnReset")

btn1.addEventListener("click", () => {
    firstPlayerScoreInt++;
    firstPlayerScore.innerText = firstPlayerScoreInt;
})

btn2.addEventListener("click", () => {
    secondPlayerScoreInt++;
    secondPlayerScore.innerText = secondPlayerScoreInt;
})

btnReset.addEventListener("click", () => {
    firstPlayerScoreInt = 0;
    firstPlayerScore.innerText = firstPlayerScoreInt;
    secondPlayerScoreInt = 0;
    secondPlayerScore.innerText = secondPlayerScoreInt;
})




