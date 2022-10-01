let teamA = 0
let teamB = 0
let teamaEl = document.getElementById("teama-el")
let teambEl = document.getElementById("teamb-el")


function teamaIncrease1() {
    teamA += 1
    teamaEl.textContent = teamA 

}
function teamaIncrease2() {
    teamA += 2
    teamaEl.textContent = teamA
}
function teamaIncrease3() {
    teamA += 3
    teamaEl.textContent = teamA
}

function teambIncrease1() {
    teamB += 1
    teambEl.textContent = teamB
}

function teambIncrease2() {
    teamB += 2
    teambEl.textContent = teamB
}

function teambIncrease3() {
    teamB += 3
    teambEl.textContent = teamB
}

function reset() {
    teamA = 0
    teamB = 0
  teamaEl.textContent = 0
  teambEl.textContent = 0  
}
