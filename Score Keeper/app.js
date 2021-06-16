const score = document.querySelector("#score")
const firstPlayerScore =  document.querySelector('#firstPlayerScore');
const secondPlayerScore = document.querySelector('#secondPlayerScore');
let firstPlayerScoreInt = parseInt(firstPlayerScore.innerText);

// firstPlayerScore.addEventListener("click", ()=> console.log("1"))
// secondPlayerScore.addEventListener("click", ()=> console.log("2"))

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btnReset = document.querySelector("#btnReset")

btn1.addEventListener("click", () => {
    firstPlayerScoreInt++;
    firstPlayerScore.innerText = firstPlayerScoreInt;
    console.log(firstPlayerScoreInt)
    console.log(score.value)
})

btnReset.addEventListener("click", () => {
    firstPlayerScoreInt = 0;
    firstPlayerScore.innerText = firstPlayerScoreInt;
})



if(firstPlayerScoreInt === score.value){
    console.log("player 1 won!")
}
