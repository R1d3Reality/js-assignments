// 2. Assignment (Mathematical Shapes):
// a) Write a JavaScript program to find the diagonal of a square where the length of each side is 9.

// let side = 9;
// let diagonal = Math.sqrt(side ** 2 + side ** 2);
// console.log('The diagonal of square is ' + diagonal);

// b) Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

// let a = 5;
// let b = 6;
// let c = 7;
// let s = (a + b + c) / 2;
// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//
// console.log("The area of the triangle is " + area);


// c) Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.

// let radius = 4;
// let circumference = 2 * Math.PI * radius;
// let surfaceArea = Math.PI * radius ** 2;
//
// console.log("The circumference of the circle is " + circumference);
// console.log("The surface area of the circle is " + surfaceArea);

// 3. Assignment (Conditional Statements & Loops):

// a) Write a JavaScript program that accepts two integers and displays the larger of the two.

// function getMaxNumber () {
//   let a = parseInt(prompt('Enter the number a'));
//   let b = parseInt(prompt('Enter the number b'));
//
//   if (isNaN(a) || isNaN(b)) {
//     console.log('Please enter valid numbers');
//   } else if (a > b) {
//     console.log(a + ' is larger then ' + b);
//   } else if (b > a) {
//     console.log(b + ' is larger then ' + a);
//   } else {
//     console.log('Both numbers are equal');
//   }
// }
// getMaxNumber();



//b) Write a JavaScript program that checks whether an integer is an even or an odd number.

// function evenOrOdd () {
//   let a = parseInt(prompt('Enter the number'));
//
//   if (isNaN(a)) {
//     console.log('Enter a valid number');
//   } else if (a % 2 === 0) {
//     console.log(a + ' is an even number');
//   } else {
//     console.log(a + ' is an odd number');
//   }
// }
//
// evenOrOdd();


// 4. Assignment (Main JavaScript Project):

function computerPlay () {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')
  ) {
      return 'You win! ' + playerSelection + ' beats ' + computerSelection;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'Paper') ||
    (playerSelection === 'paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'Rock')
  ) {
    return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
  } else {
    return 'Its a tie game!'
  }
}

function game () {
  let playerScore = 0;
  let computerScore = 0;
  let playerCheck = ['rock', 'paper', 'scissors'];
  let maxTries = 3;

  for (let i = 0; i < 5; i++) {
    let tries = 0;
    let playerSelection = prompt('Choose Rock, Paper or Scissors')
    if (playerSelection === null) {
      console.log('Game ended by the player')
      return
    }
    playerSelection = playerSelection.toLowerCase();
    while (!playerCheck.includes(playerSelection) && tries < maxTries) {
      playerSelection = prompt('Invalid input. Choose Rock, Paper or Scissors').toLowerCase();
      tries++;
    }

    if (tries === maxTries) {
      console.log('You have reached the maximum number of tries. Game ended.');
      return;
    }
    let computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.startsWith('You win!')) {
      playerScore++;
    } else if (result.startsWith('You lose!')) {
      computerScore++
    }
  }

  if (playerScore > computerScore) {
    console.log('You win the game with score ' + playerScore);
  } else if (playerScore < computerScore) {
    console.log('You lose the game. Computer score is ' + computerScore);
  } else {
    console.log('Its a tie game')
  }
}

game();