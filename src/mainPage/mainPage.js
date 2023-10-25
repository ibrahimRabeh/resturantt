import topPage from "../topOfPage.js";
import "../styles/mainPagestyle.scss"
import "../styles/style.scss";

function mainpage() {
  topPage();
  const bodyContentContainer = document.createElement("div");
  let love = document.createElement("h1");
  love.innerHTML = "Made with love";
  let firstcontainer = document.createElement("div",);
  firstcontainer.classList.toggle("container");
  let firstcard = document.createElement("div");
  firstcard.innerHTML =
    "All our products are made with outmost care and affection";
  firstcard.classList.toggle("card");
  let firstimg = document.createElement("img");
  firstimg.classList.toggle("firstimg");
  firstimg.classList.toggle("imgs");
  

  let secondcontainer = document.createElement("div");
  secondcontainer.classList.toggle("container");
  let secondcard = document.createElement("div");
  secondcard.innerHTML =
    "Savor the Flavor of Locally-Sourced, Organic Baked Goods";
  secondcard.classList.toggle("card");
  let secondimg = document.createElement("img");
  secondimg.classList.toggle("secondimg");

  secondimg.classList.toggle("imgs");

  let thirdcontainer = document.createElement("div");
  thirdcontainer.classList.toggle("container");
  let thirdcard = document.createElement("div");
  thirdcard.innerHTML = "CAT BREAD";
  thirdcard.classList.toggle("card");
  let thirdimg = document.createElement("img");
  thirdimg.classList.toggle("thirdimg");

  thirdimg.classList.toggle("imgs");

  content.appendChild(bodyContentContainer);
  bodyContentContainer.append(love, firstcontainer, secondcontainer, thirdcontainer);
  firstcontainer.append(firstcard, firstimg);
  secondcontainer.append(secondcard, secondimg);
  thirdcontainer.append(thirdcard, thirdimg); 

}

mainpage();