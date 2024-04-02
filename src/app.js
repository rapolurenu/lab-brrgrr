// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if(state.Cheese){
    cheese.style.display = "block";
  }else{
    cheese.style.display = "none";
  }

}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById("tomato");
  state.Tomatoes ? tomatoes.style.display = "block" : tomatoes.style.display = "none" ;
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions=document.getElementById("onion");
  state.Onions ? onions.style.display = "block" : onions.style.display = "none" ;
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce=document.getElementById("lettuce");
  state.Lettuce ? lettuce.style.display = "block" : lettuce.style.display = "none" ;

}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  document.querySelector(".btn-patty").classList.toggle("active",state.Patty);
  document.querySelector(".btn-cheese").classList.toggle("active",state.Cheese);
  document.querySelector(".btn-tomatoes").classList.toggle("active",state.Tomatoes);
  document.querySelector(".btn-onions").classList.toggle("active",state.Onions);
  document.querySelector(".btn-lettuce").classList.toggle("active",state.Lettuce);
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  document.getElementById("patty").style.visibility = state.Patty ? "visible" : "hidden";
  document.getElementById("cheese").style.visibility = state.Cheese ? "visible" : "hidden";
  document.getElementById("tomato").style.visibility = state.Tomatoes ? "visible" : "hidden";
  document.getElementById("onion").style.visibility = state.Onions ? "visible" : "hidden";
  document.getElementById("lettuce").style.visibility = state.Lettuce ? "visible" : "hidden";
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  let pattyPrice = 80;
  let cheesePrice = 10;
  let tomatoesPrice = 20;
  let onionsPrice = 20;
  let lettucePrice = 20;

  let price = wholeWheatBun +
    (state.Patty ? pattyPrice : 0) +
    (state.Cheese ? cheesePrice : 0) +
    (state.Tomatoes ? tomatoesPrice : 0) +
    (state.Onions ? onionsPrice : 0) +
    (state.Lettuce ? lettucePrice : 0);

  document.querySelector(".price-details").innerText = "INR " + price;
}
