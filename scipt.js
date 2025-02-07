let humanScore=0;
let computerScore=0;
console.log("Human ",humanScore);
console.log("computer",computerScore);

// Function that returns random choice from computer
function getComputerChoice () {
  return Math.floor(Math.random()*3+1)      
}

// 1=rock; 2=paper; 3=scisors

// Function that takes human choice
function getHumanChoice () {
    let sign=prompt("Rock, paper scisors on three...two...one...")
    if (sign.toLowerCase()==="rock") {
        console.log("you have chosen rock");
        return 1
    }
    else if (sign.toLowerCase()==="paper") {
        console.log("you have chosen paper");
        return 2
    } 
    else if (sign.toLowerCase()==="scisors") {
        console.log("you have chosen scisors");
        return 3
    }
    else {
        console.log("I think you might have mispelled your choice, plese select rock, paper or scisors");
    }
}    


function playGame() {
    console.log("we are gonna play to the best of 5 games")
    for (let i = 0; i < 4; i++) {
        console.log(i);
        
    }

    // Function that plays one round
    function playRound(humanChoice,computerChoice) {
        // Tied
        if (humanChoice===computerChoice) {
            console.log("We tied, we both picked");
            switch (humanChoice) {
                case 1:
                    console.log("Rock");
                    break;
                case 2:
                    console.log("Paper");
                    break;
                default:
                    console.log("Scisors");
                    break;
            }
        }

        else if (humanChoice===1) {
            if (computerChoice===2) {
                console.log("You lose! Paper beats Rock");
            }
            else {
                console.log("You win! Rock beats Scisors");
            }
        }

        else if (humanChoice===2) {
            if (computerChoice===1) {
                console.log("You win! Paper beats Rock");
            }
            else {
                console.log("You lose! Scisors beats Paper");
            }
            
        }

        else if (humanChoice===3) {
            if (computerChoice===1) {
                console.log("You lose! Rock beats Scisors");
            }
            else {
                console.log("You win! Scisors beats Paper");
            }
            
        }

        else {
            console.log("something went wrong, you picked ",humanChoice," and I picked ",computerChoice," but somwhere there was an error");
        }
    }
}

playGame();

let human=getHumanChoice();
let computer=getComputerChoice();

console.log("And I have chosen ",computer);
playRound(human,computer);