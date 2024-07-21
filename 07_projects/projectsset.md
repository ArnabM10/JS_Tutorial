### Projects related to DOM

## project link
[click here] ()

### Solution code


<h5>Project 1 - color Changer 🔥:


```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (eve) {
    console.log(eve);
    console.log(eve.target);
    if (eve.target.id === 'grey') {
      body.style.backgroundColor = eve.target.id;
    }
    if (eve.target.id === 'white') {
      body.style.backgroundColor = eve.target.id;
    }
    if (eve.target.id === 'blue') {
      body.style.backgroundColor = eve.target.id;
    }
    if (eve.target.id === 'yellow') {
      body.style.backgroundColor = eve.target.id;
    }
  });
});
```


<h5> Project 2 - BMI Generator ☕️ : 

```javascript
const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

<h5>Project 3 -Digital Clock 😎:

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```