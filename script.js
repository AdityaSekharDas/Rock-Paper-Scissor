let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const us = document.querySelector("#user_score");
const cs = document.querySelector("#comp_score");
const mc = document.querySelector(".msg-container");

const genComp = () => {
    const options = ["rock","paper","scissor"];
    const num = Math.floor(Math.random() * 3);
    return options[num];
}


const playGame = (user_choice) => {
    console.log("User choice is " + user_choice);
    const comp_choice = genComp();
    console.log("Computer choice is " + comp_choice);
    let userWin = true;
    if(user_choice === comp_choice) {
        console.log("Draw");
        msg.innerText = "Draw....";
        return;
        
    }
    
    else {
        
        if(user_choice === "rock") {
            userWin = comp_choice === "paper" ? false : true;
            user_score++;
        }
        else if(user_choice === "paper") {
            userWin = comp_choice === "scissor" ? false : true;
        }
        else {
            userWin = comp_choice === "rock" ? false : true;
        }
        
    }
    if(userWin) {
        console.log("You Win....");
        msg.innerText = "You Win....";
        user_score++;
        us.innerText = user_score
        msg.style.backgroundColor = "green";

    }
    else {
        console.log("You Lose....");
        msg.innerText = "You Lose....";
        comp_score++;
        cs.innerText = comp_score;
        msg.style.backgroundColor = "red";
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const user_choice = choice.getAttribute("id");
        playGame(user_choice);
    })
})