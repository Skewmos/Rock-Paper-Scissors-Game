  let userScore = 0;
  let computerScore = 0;
  const userScore_span = document.getElementById("user-score");
  const computerScore_span = document.getElementById("computer-score");
  const scoreBoard_div = document.querySelector(".score-board");
  const result_p =  document.querySelector('.result > p');
  const rock_div = document.getElementById("rock");
  const paper_div = document.getElementById("paper");
  const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
  const choices = ['rock' , 'paper' , 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function firstLetter(string) {
  return string.substr(0,1).toUpperCase() + string.substr(1 , string.lenght).toLowerCase();
}

function win(userChoice, computerChoice){
  const smallUserWord = " user".fontsize(3).sub();
  const smallCompWord = " computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${firstLetter(userChoice)}${smallUserWord} beats ${firstLetter(computerChoice)}${smallCompWord} . You Win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice){
  const smallUserWord = " user".fontsize(3).sub();
  const smallCompWord = " computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${firstLetter(userChoice)}${smallUserWord} loses to  ${firstLetter(computerChoice)}${smallCompWord} . You Lost...`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice){
  const smallUserWord = " user".fontsize(3).sub();
  const smallCompWord = " computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${firstLetter(userChoice)}${smallUserWord} equals ${firstLetter(computerChoice)}${smallCompWord} . It's a draw.`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;

    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;

    case "scissorsscissors":
    case "rockrock":
    case "paperpaper":
      draw(userChoice, computerChoice);
       break;
  }
}

function main(){
  rock_div.addEventListener('click' , function(){
    game("rock");
  })

  paper_div.addEventListener('click' , function(){
    game("paper");
  })

  scissors_div.addEventListener('click' , function(){
    game("scissors");
  })
}
main();
