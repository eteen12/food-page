

const createRestaurantHomePage = () =>{
    const content = document.querySelector('#content');

    const pageContent = document.createElement('div');
    pageContent.classList.add('main-page-wrapper');
    content.appendChild(pageContent);
    
    const adWrapper = document.createElement('div');
    adWrapper.classList.add('ad-wrapper');
    pageContent.appendChild(adWrapper);
    
    const mainHeader = document.createElement('h1');
    mainHeader.classList.add('main-header');
    mainHeader.textContent = "Take a Look at";
    adWrapper.appendChild(mainHeader);

    const subHeader = document.createElement('h1');
    subHeader.classList.add('main-header2');
    subHeader.textContent = "Our New Menu"
    mainHeader.appendChild(subHeader);
    
    const foodImg = document.createElement('img');
    foodImg.classList.add("burger");
    foodImg.src = 'https://i.ibb.co/Z2gwsLd/burger.png';
    adWrapper.appendChild(foodImg);


   

    
    

}
export default createRestaurantHomePage;