const score = document.querySelector("#score")
const playersNumber = prompt ("Type the number of players")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btnReset = document.querySelector("#btnReset")

for(let i = 0; i < playersNumber; i++){
const playerName = document.createElement("h2");
playerName.innerText = `Player ${i+1}:`;
document.querySelector("#playerNames").appendChild(playerName);
const playerScore = document.createElement("span");
playerScore.innerText = '0';
document.querySelector("#playerNames").appendChild(playerScore);
const space = document.createElement("div");
document.querySelector("#playerNames").appendChild(space);
const newButton = document.createElement("button");
newButton.innerText = `Player ${i+1} scored! (+1)`;
document.querySelector("#buttons").appendChild(newButton);
}

allSpans = []

for(let i = 0; i < playersNumber; i++){
    allSpans.push(parseInt((document.querySelectorAll('span')[i]).innerText))
    document.querySelectorAll('button')[i].addEventListener("click", () => { 
        allSpans[i] = allSpans[i] + 1;
        document.querySelectorAll('span')[i].innerText = allSpans[i]
    })
}