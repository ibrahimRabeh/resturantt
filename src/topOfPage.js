import './styles/style.scss';
const content = document.getElementById("content");
content.innerHTML = "";

const topPageContainer = document.createElement("div");
topPageContainer.classList.toggle("TopPage");
content.appendChild(topPageContainer);

const title = document.createElement("div");
title.classList.toggle("title");
title.innerHTML = "Welcome to your new Favorite bakery!";

const mainpage = document.createElement("a");
mainpage.innerHTML = "Main";
mainpage.href = "index.html";

const ourmenu = document.createElement("a");
ourmenu.innerHTML = "Menu";
ourmenu.href = "products.html";


const aboutpagebtn = document.createElement("a");
aboutpagebtn.innerHTML = "About us";
aboutpagebtn.href = "about.html"


function topPage() {


  const MainMenuContainer = document.createElement("div");
  MainMenuContainer.classList.toggle("MainMenuContainer");

  topPageContainer.appendChild(title);
  topPageContainer.appendChild(MainMenuContainer);
  MainMenuContainer.appendChild(mainpage);
  MainMenuContainer.appendChild(ourmenu);
  MainMenuContainer.appendChild(aboutpagebtn); 
}

export default topPage;
export {title}
export {mainpage}
export {ourmenu}





