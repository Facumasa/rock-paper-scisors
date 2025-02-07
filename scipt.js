// Function that returns random choice from computer
function getComputerChoice () {
  return Math.floor(Math.random()*3+1)      
}

// 1=rock; 2=paper; 3=scisors

// Function that takes human choice
function getHumanChoice () {
    let sign=prompt("Rock, paper scisors on three...two...one...")
    if (sign.toLowerCase()==="rock") {
        console.log("You have chosen rock");
        return 1
    }
    else if (sign.toLowerCase()==="paper") {
        console.log("You have chosen paper");
        return 2
    } 
    else if (sign.toLowerCase()==="scisors") {
        console.log("You have chosen scisors");
        return 3
    }
    else {
        console.log("I think you might have mispelled your choice, plese select rock, paper or scisors");
    }
}    


function playGame() {
    console.log("we are gonna play to the best of 5 games");
    let humanScore=0;
    let computerScore=0;
    for (let i = 0; i < 5; i++) {
        console.log("");
        console.log("Our current score is Human:",humanScore,"; Computer:",computerScore);
        console.log("");
        let human=getHumanChoice();
        let computer=getComputerChoice();
        switch (computer) {
            case 1:
                console.log("And I have chosen Rock");
                break;
            case 2:
                console.log("And I have chosen Paper");
                break;
            case 3:
                console.log("And I have chosen Scisors");
                break;
            default:
                console.log("Something went WRONG");
                break;
        }
        playRound(human,computer);
    }
    console.log("Our FINAL score is Human:",humanScore,"; Computer:",computerScore);

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
                computerScore++;
            }
            else {
                console.log("You win! Rock beats Scisors");
                humanScore++;
            }
        }

        else if (humanChoice===2) {
            if (computerChoice===1) {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
            else {
                console.log("You lose! Scisors beats Paper");
                computerScore++;
            }
            
        }

        else if (humanChoice===3) {
            if (computerChoice===1) {
                console.log("You lose! Rock beats Scisors");
                computerScore++;
            }
            else {
                console.log("You win! Scisors beats Paper");
                humanScore++;
            }
            
        }

        else {
            console.log("something went wrong, you picked ",humanChoice," and I picked ",computerChoice," but somwhere there was an error");
        }
    }
}

playGame();