let computer_options=["rock", "paper","scissors"];
const roundsCount=5
let computerScore=0;
let YourScore=0;
let tieScore=0;
let computerArray=[];
let playerArray=[];
game();

//Computer Choose from Array
function computerPlay(computer_options)
{
    let computerSelection=computer_options[Math.floor(Math.random()*computer_options.length)];    
    return computerSelection;
}

//Round winner
function gameRound(computerArray,playerArray)
{
    if (computerArray == "paper" && playerArray=="rock" || 
        computerArray == "rock" && playerArray=="scissors"||
        computerArray == "scissors" && playerArray=="paper")
    {   
        console.log("You Lose!! "+computerArray+ " beats "+ playerArray);
        winner="computer";
        computerScore+=1;
    }
    else if (computerArray==playerArray)
    {   
        console.log("Tie!! "+playerArray+ " = "+ computerArray);
        winner="tie";
        tieScore+=1;
    }
    else
    {   
        console.log("You Win!! "+playerArray+ " beats "+ computerArray);
        winner="user";
        YourScore+=1;
    }
    console.log("Your Score: " + YourScore + " || Computer Score: "+ computerScore +" ||Ties: "+tieScore )
    return winner;
}

function UserValidation(index){
    loop:
    while(true){
        playerArray[index]= window. prompt("Choose Rock , Paper or Scissors").toLowerCase();
        switch (playerArray[index]) {
            case "rock": 
                console.log("Player: "+playerArray[index]);
                break loop;
            case "paper": 
                console.log("Player: "+playerArray[index]);
                break loop;
            case "scissors":
                console.log("Player: "+playerArray[index]);
                break loop;
            default: alert("Please enter a valid choice");
        }
    }
}
function game()
{   
    //Collecting computer play array
    for(let i = 0 ; i < roundsCount ;i++)
    {
        console.log("Round: "+ (i+1) );
        computerArray[i]=computerPlay(computer_options);
        UserValidation(i);
        console.log("Computer: "+computerArray[i]);
        console.log(gameRound(computerArray[i],playerArray[i])); 
        console.log("____________________________________________________"); 
    }

}