let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
   
    let randomIndexOne = Math.floor( Math.random() * fighters.length )
    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
})
