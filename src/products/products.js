import "../styles/style.scss";
import "../styles/productsStyle.scss";
import topPage from "../topOfPage";
import { title } from "../topOfPage";
import { mainpage } from "../topOfPage";
import { ourmenu } from "../topOfPage";

function products() {
  mainpage.href = "index.html";
  ourmenu.href = "javascript: void(0)";

  topPage();
  title.innerHTML = "Our products";

  let productsContainer = document.createElement("div");
  productsContainer.classList.toggle("productsContainer");

  let itemContainer1 = document.createElement("div");
  itemContainer1.classList.toggle("itemContainer");
  let item1 = document.createElement("p");
  item1.classList.toggle("item");
  item1.innerHTML = "Bread bun made with full grain flour and topped with sesame seeds and herbs\n\
  1$ for 3 buns";
  let item1img = document.createElement("img");
  item1img.classList.toggle("firstimg");

  let itemContainer2 = document.createElement("div");
  itemContainer2.classList.toggle("itemContainer");
  let item2 = document.createElement("p");
  item2.innerHTML = "fresh sourdough baguette French style\n\
  2$";
  item2.classList.toggle("item");
  let item2img = document.createElement("img");
  item2img.classList.toggle("secondimg");

  let itemContainer3 = document.createElement("div");
  itemContainer3.classList.toggle("itemContainer");
  let item3 = document.createElement("p");
  item3.innerHTML = "croissant made in the traditional French way \n"
  "1$ butter croissant\n"
  "1.5$ chocolate croissant";
  item3.classList.toggle("item");
  let item3img = document.createElement("img");
  item3img.classList.toggle("thirdimg");

  let itemContainer4 = document.createElement("div");
  itemContainer4.classList.toggle("itemContainer");
  let item4 = document.createElement("p");
  item4.innerHTML = "Pain au chocolat made with dark chocolate\n\
  1.5$"
  item4.classList.toggle("item");
  let item4img = document.createElement("img");
  item4img.classList.toggle("fourthimg");

  let itemContainer5 = document.createElement("div");
  itemContainer5.classList.toggle("itemContainer");
  let item5 = document.createElement("p");
  item5.innerHTML = "Traditional Sourdough bread made with ray flower\n\
  4$"
  item5.classList.toggle("item");
  let item5img = document.createElement("img");
  item5img.classList.toggle("fifthimg");

  let itemContainer6 = document.createElement("div");
  itemContainer6.classList.toggle("itemContainer");
  let item6 = document.createElement("p");
  item6.innerHTML = "Bread basket with a variety of breads for bread lovers\n\
  10$"
  item6.classList.toggle("item");
  let item6img = document.createElement("img");
  item6img.classList.toggle("sixthimg");
  
  content.appendChild(productsContainer);
  productsContainer.append(
    itemContainer1,
    itemContainer2,
    itemContainer3,
    itemContainer4,
    itemContainer5,
    itemContainer6
  );
  itemContainer1.append(item1img, item1);
  itemContainer2.append(item2img,item2);
  itemContainer3.append(item3img,item3);
  itemContainer4.append(item4img,item4);
  itemContainer5.append(item5img,item5);
  itemContainer6.append(item6img,item6);
  

}

products();
