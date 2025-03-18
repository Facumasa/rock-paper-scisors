// Global variables  -----------------------------------------------------------
let humanScore=0;
let computerScore=0;



// DOM modification -----------------------------------------------------------

const container = document.querySelector("#container");

const score = document.createElement("h3");
score.classList.add("content");

score.textContent = 'Right now the score is: Human '+humanScore+' and Computer '+computerScore;

container.appendChild(score);



const writeHuman = document.createElement("div");
writeHuman.classList.add("content");

container.appendChild(writeHuman);

const writePreComputer = document.createElement("div");
writePreComputer.classList.add("content");

container.appendChild(writePreComputer);

const writeComputer = document.createElement("h4");
writeComputer.classList.add("content");

container.appendChild(writeComputer);




// creates a constant that is a node list (almost an array) that have all the buttons
const buttons = document.querySelectorAll("button");

// // .forEach to iterate through the different buttons
// buttons.forEach((button) => {
//     button.addEventListener("click",() => alert(button.id));
// });

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playRound(getHumanChoice(button.id),getComputerChoice());
    checkScore();
    });
  });





// Functions: -----------------------------------------------------------

// Function that returns random choice from computer
function getComputerChoice () {
  return Math.floor(Math.random()*3+1)      
}

// 1=rock; 2=paper; 3=scisors

// Function that takes human choice

function getHumanChoice (sign) {
    if (sign.toLowerCase()==="rock") {
        writeHuman.textContent = "You have chosen rock";
        return 1
    }
    else if (sign.toLowerCase()==="paper") {
        writeHuman.textContent = "You have chosen paper";
        return 2
    } 
    else if (sign.toLowerCase()==="scisors") {
        writeHuman.textContent = "You have chosen scisors";
        return 3
    }
    else {
        writeHuman.textContent = "I think there was an error";
    }
}    

// We remore this part, which is to play five rounds
// ----------------------------------------------------------------------
// function playGame() {
//     console.log("we are gonna play to the best of 5 games");
//     let humanScore=0;
//     let computerScore=0;
//     // for (let i = 0; i < 5; i++) {
//         console.log("");
//         console.log("Our current score is Human:",humanScore,"; Computer:",computerScore);
//         console.log("");
//         let human=humanChoice;
//         let computer=getComputerChoice();
//         switch (computer) {
//             case 1:
//                 console.log("And I have chosen Rock");
//                 break;
//             case 2:
//                 console.log("And I have chosen Paper");
//                 break;
//             case 3:
//                 console.log("And I have chosen Scisors");
//                 break;
//             default:
//                 console.log("Something went WRONG");
//                 break;
//         }
//         playRound(human,computer);
//     // }
//     console.log("Our FINAL score is Human:",humanScore,"; Computer:",computerScore);
// }
// ----------------------------------------------------------------------


    // Function that plays one round
    function playRound(humanChoice,computerChoice) {
        // Tied
        if (humanChoice===computerChoice) {
            writeComputer.textContent ="We tied, we both picked";
            switch (humanChoice) {
                case 1:
                    writeComputer.textContent =writeComputer.textContent + " Rock";
                    break;
                case 2:
                    writeComputer.textContent =writeComputer.textContent + " Paper";
                    break;
                default:
                    writeComputer.textContent =writeComputer.textContent + " Scisors";
                    break;
            }
        }

        else if (humanChoice===1) {
            if (computerChoice===2) {
                writePreComputer.textContent ="I have chosen Paper";
                writeComputer.textContent ="You lose! Paper beats Rock";
                computerScore++;
            }
            else {
                writePreComputer.textContent ="I have chosen Scisors";
                writeComputer.textContent ="You win! Rock beats Scisors";
                humanScore++;
            }
        }

        else if (humanChoice===2) {
            if (computerChoice===1) {
                writePreComputer.textContent ="I have chosen Rock";
                writeComputer.textContent ="You win! Paper beats Rock";
                humanScore++;
            }
            else {
                writePreComputer.textContent ="I have chosen Scisors";
                writeComputer.textContent ="You lose! Scisors beats Paper";
                computerScore++;
            }
            
        }

        else if (humanChoice===3) {
            if (computerChoice===1) {
                writePreComputer.textContent ="I have chosen Rock";
                writeComputer.textContent ="You lose! Rock beats Scisors";
                computerScore++;
            }
            else {
                writePreComputer.textContent ="I have chosen Paper";
                writeComputer.textContent ="You win! Scisors beats Paper";
                humanScore++;
            }
            
        }

        else {
            writeComputer.textContent ="something went wrong, you picked ",humanChoice," and I picked ",computerChoice," but somwhere there was an error";
        }
        score.textContent = 'Right now the score is: Human '+humanScore+' and Computer '+computerScore;
    }


function checkScore() {
 if (humanScore===5) {

    // Apply inline styles for `white-space: pre-line` to handle the line breaks
    score.style.whiteSpace = "pre-line"; // Enables \n to create line breaks

    score.style.color = "green";
    score.textContent = 'You WON!!!! \n The final score was Human '+humanScore+' and Computer '+computerScore;
    gameOver();
}
 else if (computerScore===5) {

    // Apply inline styles for `white-space: pre-line` to handle the line breaks
    score.style.whiteSpace = "pre-line"; // Enables \n to create line breaks

    score.style.color = "red";
    score.textContent = 'You Lost against the machine =( \n The final score was Human '+humanScore+' and Computer '+computerScore;
    gameOver();
}
}

function gameOver(){
    writeComputer.textContent ='';
    writePreComputer.textContent ='';
    writeHuman.textContent ='';

    // removes all <button> elements, even the ones created in the html:
    document.querySelectorAll("button").forEach(button => {
        button.remove();
    });

    // Play again? If clicked reloads the hole page (all from chat GPT)
    const reloadButton = document.createElement("button"); // Create button

    reloadButton.style.fontSize = "20px"; // Increase text size
    reloadButton.style.padding = "15px 30px"; // Make it larger
    reloadButton.style.width = "200px"; // Set button width
    reloadButton.style.height = "60px"; // Set button height
    reloadButton.style.borderRadius = "10px"; // Rounded corners

    reloadButton.textContent = "Play again"; // Set button text
    reloadButton.classList.add("reload-btn"); // Add a class (optional)

    reloadButton.addEventListener("click", () => {
        location.reload(); // Reloads the page
    });

    document.body.appendChild(reloadButton); // Add the button to the page
}
