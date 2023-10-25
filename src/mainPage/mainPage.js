import topPage from "../index.js";
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
  firstimg.src = "../src/mainPage/bakery-1868396_1920.jpg";
  firstimg.classList.toggle("imgs");
  let secondcontainer = document.createElement("div");
  secondcontainer.classList.toggle("container");
  let secondcard = document.createElement("div");
  secondcard.innerHTML =
    "Savor the Flavor of Locally-Sourced, Organic Baked Goods";
  secondcard.classList.toggle("card");
  let secondimg = document.createElement("img");
  secondimg.src = "../src/mainPage/wheat-7782266_1920.jpg";
  secondimg.classList.toggle("imgs");
  let thirdcontainer = document.createElement("div");
  thirdcontainer.classList.toggle("container");
  let thirdcard = document.createElement("div");
  thirdcard.innerHTML = "CAT BREAD";
  thirdcard.classList.toggle("card");
  let thirdimg = document.createElement("img");
  thirdimg.src = "../src/mainPage/cat-7884678_1920.jpg";
  thirdimg.classList.toggle("imgs");

  content.appendChild(bodyContentContainer);
  bodyContentContainer.append(love, firstcontainer, secondcontainer, thirdcontainer);
  firstcontainer.append(firstcard, firstimg);
  secondcontainer.append(secondcard, secondimg);
  thirdcontainer.append(thirdcard, thirdimg); 

}

mainpage();