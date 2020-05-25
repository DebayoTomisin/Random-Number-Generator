let forms = document.getElementById('form');
let submit = document.getElementById('submit');
let lowerBound = document.getElementById('lower');
let upperBound = document.getElementById('upper');
let length = document.getElementById('length');
let results = document.getElementById('game-results')



submit.addEventListener('click', (e) => {
  e.preventDefault();
  
  const upper = +upperBound.value;
  const lower = +lowerBound.value;
  const amount = +length.value;
  let result = numberGen(upper, lower, amount);
  for (let i = 0; i in result; i++){
    let newEl = document.createElement('p');
    newEl.textContent = result[i];
    results.appendChild(newEl);
  };
}
);


function numberGen(upper, lower, amount){
  let number = [];  
  for (let i = 0; i < amount; i++){
    number.push(Math.round((Math.random() * (upper- lower)) + lower));     
  } 
  return number; 
};



