### Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 - color Changer 🔥:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <style>
    html {
      margin: 0;
    }

    span {
      display: block;
    }
    .canvas {
      margin: 100px auto 100px;
      width: 80%;
      text-align: center;
    }

    .button {
      width: 100px;
      height: 100px;
      border: solid black 2px;
      display: inline-block;
    }

    #grey {
      background: grey;
    }

    #white {
      background: white;
    }
    #blue {
      background: blue;
    }
    #yellow {
      background: yellow;
    }
  </style>
  <body>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script>
      const buttons = document.querySelectorAll(".button");
      const body = document.querySelector("body");

      buttons.forEach(function (button) {
        console.log(button);
        button.addEventListener("click", function (eve) {
          console.log(eve);
          console.log(eve.target);
          if (eve.target.id === "grey") {
            body.style.backgroundColor = eve.target.id;
          }
          if (eve.target.id === "white") {
            body.style.backgroundColor = eve.target.id;
          }
          if (eve.target.id === "blue") {
            body.style.backgroundColor = eve.target.id;
          }
          if (eve.target.id === "yellow") {
            body.style.backgroundColor = eve.target.id;
          }
        });
      });
    </script>
  </body>
</html>

```


## Project 2 - BMI Generator ☕️: 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>BMI Calculator</title>
  </head>
  <style>
    .container {
      width: 100%;
      height: 825px;

      background-color: #797978;
      padding-left: 30px;
    }
    #height,
    #weight {
      width: 150px;
      height: 25px;
      margin-top: 30px;
    }

    #weight-guide {
      margin-left: 75px;
      margin-top: 25px;
    }

    #results {
      font-size: 35px;
      margin-left: 90px;
      margin-top: 20px;
      color: rgb(241, 241, 241);
    }

    button {
      width: 150px;
      height: 35px;
      margin-left: 90px;
      margin-top: 25px;
      background-color: #fff;
      padding: 1px 30px;
      border-radius: 8px;
      color: #212121;
      text-decoration: none;
      border: 2px solid #212121;

      font-size: 25px;
    }

    h1 {
      padding-left: 15px;
      padding-top: 25px;
    }
  </style>
  <body>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script>
    const form = document.querySelector("form");
    // this usecase will give you empty value
    // const height = parseInt(document.querySelector('#height').value)

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const height = parseInt(document.querySelector("#height").value);
      const weight = parseInt(document.querySelector("#weight").value);
      const results = document.querySelector("#results");

      if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
      } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid height ${weight}`;
      } else {
        const bmi = (weight / ((height * height) / 1000)).toFixed(2);
        // show the result
        results.innerHTML = `<span>${bmi}</span>`;
      }
    });
  </script>
</html>

```

## Project 3 -Digital Clock 😎:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
  </body>
  <script>
    const clock = document.getElementById('clock');
    // const clock = document.querySelector('#clock');

    setInterval(function(){
      let date = new Date();
      // console.log(date.toLocaleTimeString())
      clock.innerHTML = date.toLocaleTimeString();
    }, 1000)
  </script>
</html>
```

## Project 4 - Guess the number 🤨:

<h5>HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="background-color:#212121; color:#fff;">    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
    <div>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
          <p >Previous Guesses: <span class="guesses"></span></p>
          <p >Guesses Remaining: <span class="lastResult">10</span></p>
          <p class="lowOrHi"></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```


<h5> js file:

```javascript

// console.log(parseInt(Math.random() * 100 + 1));
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```

## Project 5 - Unlimited Colors 🧠:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unlimited Colors Change</title>
</head>
<body>
    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
// generate a random color

const randomColor = () => {
  const hex = '0123456789ACBDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor())
let intervalId;
const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 2000);
  }
  
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

</script>
</html>
```

## Project 6 - Keyboard check 👻:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event KeyCodes</title>
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }

      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>

  <body>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>
  </body>
<script>
    const insert = document.getElementById("insert");
    window.addEventListener('keydown', (e) => {
      insert.innerHTML = `
        <div class = 'color'>
    <table>
    <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === " " ? "space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
        </div>    
    `;
    });
  </script>
</html>
```