const cookie = document.querySelector(".cookie");

const cookieImage = document.querySelector(".cookie-img")

const buyClicker = document.querySelector(".buy-clicker");
const number = document.querySelector(".number-of-cookies");
const numberOfClickers = document.querySelector(".number-of-clickers");

const numberOfMultipliers = document.querySelector(".number-of-multipliers");

const clickerPriceElement = document.querySelector(".clicker-price");

const buyMultiplier = document.querySelector(".buy-multiplier");
const multiplierPriceElement = document.querySelector(".multiplier-price");



let count = 0;
let clickers = 0;
let multiplier = 1;
let bonus = 0;

//clicker stuff
let clickerPrice = 10;
clickerPriceElement.textContent = "Price: " + clickerPrice + " 🍪";

//multiplier stuff
let multiplierPrice = 10;
multiplierPriceElement.textContent = "Price: " + multiplierPrice + " 🍪";








//  whereever the mouse is positioned when on the cookie, this method should track the mouse position  so that i can
// display the number of cookies added on the cookie


// Mouse position

//  function handleMouseMove(event) {
  //    let eventDoc, doc, body;
  //    event = event || window.event;
  
  //    if(event.pageX == null && event.clientX != null)
  //    {
    //     eventDoc = (event.target && event.target.ownerDocument) || document;
    
    //    }

    //  }
    // console.log(event);


    // //end of mouse position
    

    
// prevent user from dragging cookie image
  cookieImage.ondragstart = () => 
  {
    return false;
  }




    
//COOKIE CLICK EVENT
cookie.onclick = () => {

  let element = document.createElement("div");
  element.textContent = "+" + multiplier.toLocaleString(undefined, { minimumFractionDigits: 1 });;
  element.classList.add("cookie-click");
  cookie.append(element);

  count += multiplier;
  number.textContent = "";
  number.textContent = Math.floor(count) + " cookies";

};
//END OF COOKIE CLICK EVENT



//BUY CLICKER EVENT
buyClicker.onclick = () => {
  if (count >= clickerPrice) {
    count = count - clickerPrice;
    number.textContent = Math.floor(count) + " cookies";

    clickerPrice = Math.floor(clickerPrice + 50);
    clickers++;

    clickerPriceElement.textContent =
      "Price: " + Math.floor(clickerPrice) + " 🍪";

    numberOfClickers.textContent = "clickers: " + clickers;

  //  CREATES ONE INTERVAL THAT CLICKS THE COOKIE, THIS INTERVAL RUNS FOREVER AND CAN BE STACKED
    let intervals = setInterval(AutoClick, 1100);

  }
};

// END OF BUY CLICKER EVENT




// BUY MULTIPLIER EVENT

buyMultiplier.onclick = () => {
  if (count >= multiplierPrice) {
    count = count - multiplierPrice;
    
    multiplierPrice = Math.floor(multiplierPrice + 20);
    multiplier += 2 / 10;
    
    number.textContent = Math.floor(count) + " cookies";
    // hate seeing decimals, this helps keep em to a minimum
    numberOfMultipliers.textContent = "multiplier: x" + multiplier.toLocaleString(undefined, { minimumFractionDigits: 1 });
    
    multiplierPriceElement.textContent = "Price: " + multiplierPrice + " 🍪";
  }
};

// END OF BUY MULTIPLIER EVENT

// interval method that adds a cookie every 1 second
function AutoClick() {
  if (clickers > 0) {
    count++;

    number.textContent = Math.floor(count) + " cookies";
  }
}
