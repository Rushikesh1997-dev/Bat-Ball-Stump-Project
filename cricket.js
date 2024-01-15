
function genrateComputerChoice() {
    let randomNumber = Math.random() * 3;
    
    if (randomNumber >= 0 && randomNumber <= 1) {
      console.log("Computer choose Bat");
      return "Bat";
    } else if (randomNumber > 1 && randomNumber <= 2) {
      console.log("Computer chhose Ball");
      return "Ball";
    } else {
      console.log(" Computer choose Stump");
      return "Stump";
    }
  }

  function getResult(userMove, computerMove) {
    if (userMove === "Bat") {
      if (computerMove === "Bat") {
        tScoreValue = tScoreValue + 1 ;
        document.querySelector("#tScore").innerHTML= tScoreValue;
        return "It is Tie";
      } 
      else if (computerMove === "Ball") {
        uScoreValue = uScoreValue + 1 ;
        document.querySelector("#uScore").innerHTML= uScoreValue;
        return "You are Win" 
      } 
      else if (computerMove === "Stump") {
        cScoreValue = cScoreValue + 1;
        document.querySelector("#cScore").innerHTML = cScoreValue;
        return "Computer is Win";

      }
    }

    if (userMove === "Ball") {
      if (computerMove === "Bat") {
        cScoreValue = cScoreValue + 1;
        document.querySelector("#cScore").innerHTML = cScoreValue;
        return "Computer is Win";
      } else if (computerMove === "Ball") {
        tScoreValue = tScoreValue + 1 ;
        document.querySelector("#tScore").innerHTML= tScoreValue;
        return "It is Tie";
      } else if (computerMove === "Stump") {
        uScoreValue = uScoreValue + 1 ;
        document.querySelector("#uScore").innerHTML= uScoreValue;

        return "You are Win";
        
      }
    }
    if (userMove === "Stump") {
      if (computerMove === "Bat") {
        uScoreValue = uScoreValue + 1 ;
        document.querySelector("#uScore").innerHTML= uScoreValue;

        return "You are Win";
        
      } else if (computerMove === "Ball") {
        cScoreValue = cScoreValue + 1;
        document.querySelector("#cScore").innerHTML = cScoreValue;
        return "Computer is Win";
      } else if (computerMove === "Stump") {
        tScoreValue = tScoreValue + 1 ;
        document.querySelector("#tScore").innerHTML= tScoreValue;
        return "It is Tie";
      }
    }
  }

  function showResult(userMove, computerMove, result) {


    Swal.fire(`Your choice is ${userMove} ||| Computer choice is ${computerMove} ||| Result is ${result}`);


   /* Swal.fire({
imageUrl: "images/tom.gif",
imageHeight: 150,
imageWidth: 150,
imageAlt: "A tall image",
title : "Opps!! You Loose"
}); */
    }



   
    let uScoreValue = 0;
    let cScoreValue = 0;
    let tScoreValue = 0;
   

