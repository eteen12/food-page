const createMenuPage = () => {
    const content = document.querySelector("#content");

    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add("main-page-wrapper");
    content.appendChild(mainWrapper);

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');
    mainWrapper.appendChild(menuWrapper);

    const menuImg = document.createElement('img');
    menuImg.src = "https://i.ibb.co/6H79VQN/premium-photo-1664189122502-c698839fc650.jpg";
    menuImg.classList.add("menu-img");
    menuWrapper.appendChild(menuImg);

    const menuRight = document.createElement('div');
    menuRight.classList.add('menu-right');
    menuWrapper.append(menuRight);

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "Try Our New Menu!";
    menuHeader.classList.add('menu-header');
    menuRight.appendChild(menuHeader);

    const menuChoice = document.createElement('img');
    menuChoice.src = "https://i.ibb.co/qYVzky8/menu-template-steakhouse.png";
    menuChoice.classList.add('menu-choice-image');
    menuRight.appendChild(menuChoice);  
}

export default createMenuPage;
