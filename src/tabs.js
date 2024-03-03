import createContactPage from "./contact";
import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";


const createTabs = () =>{
    const content = document.querySelector('#content');

    let navWrapper = document.createElement('div');
    navWrapper.classList.add('nav-wrapper');
    content.appendChild(navWrapper);

    let imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-wrapper');
    content.appendChild(imgWrapper);

    let logoImg = document.createElement('img');
    logoImg.classList.add('main-logo-img');
    logoImg.src = "https://i.ibb.co/42j3nD5/resturant-logo.png";
    imgWrapper.appendChild(logoImg);

    let buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add("button-wrapper");
    navWrapper.appendChild(buttonWrapper);

    let button1 = document.createElement('button');
    button1.classList.add("button1");
    button1.textContent = "Contact";
    buttonWrapper.appendChild(button1);

    let button2 = document.createElement('button');
    button2.classList.add("button2");
    button2.textContent = "Menu";
    buttonWrapper.appendChild(button2);

    let button3 = document.createElement('button');
    button3.classList.add("button3");
    button3.textContent = "Home";
    buttonWrapper.appendChild(button3);

    button1.addEventListener("click",function(){
        clearContent();
        createContactPage();
        
    })
    button2.addEventListener("click",function(){
        clearContent();
        createMenuPage();
        
    })
    button3.addEventListener("click",function(){
        clearContent();
        createRestaurantHomePage();
        
    })
}

function clearContent(){
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".main-page-wrapper");
    if(pageContent){
        content.removeChild(pageContent);
    }
}
export default createTabs;