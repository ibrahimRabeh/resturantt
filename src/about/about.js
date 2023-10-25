import topPage from "../index";
import { title } from "../index"
import "../styles/aboutStyle.scss"
import "../styles/style.scss";
function about(){
    topPage();
    title.innerHTML = "About us";
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.toggle("aboutContainer");
    const aboutText = document.createElement("p");
    aboutText.innerHTML = "We are a small bakery located in the heart of the city. We make all of our products with love and care. We use only the best ingredients and we make sure that our products are always fresh. We are open from 8am to 8pm every day. We are looking forward to seeing you in our bakery!";
    aboutText.classList.toggle("aboutText");

    content.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutText);


    
}
about();
