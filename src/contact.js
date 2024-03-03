

const createContactPage = () =>{

    const content = document.querySelector("#content");

    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add("main-page-wrapper");
    content.appendChild(mainWrapper);

    const gridWrapper = document.createElement('div');
    gridWrapper.classList.add('grid-wrapper');
    mainWrapper.appendChild(gridWrapper);

    const contactImg = document.createElement('img');
    contactImg.src = "https://i.ibb.co/42j3nD5/resturant-logo.png";
    contactImg.classList.add('contact-img');
    gridWrapper.appendChild(contactImg);

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');
    gridWrapper.appendChild(contactWrapper);

    const fullNameLabel = document.createElement('label');
    fullNameLabel.textContent = 'Full Name';
    contactWrapper.appendChild(fullNameLabel);
    const fullNameInput = document.createElement('input');
    fullNameInput.setAttribute('name', 'text');
    contactWrapper.appendChild(fullNameInput);
    const email = document.createElement('label');
    email.textContent = "Email";
    contactWrapper.appendChild(email);
    const emailInput = document.createElement('input');
    emailInput.setAttribute('email','email');
    contactWrapper.appendChild(emailInput);

    const message = document.createElement('label');
    message.textContent = "Message";
    contactWrapper.appendChild(message);
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('message','message')
    contactWrapper.appendChild(messageInput);

    const button = document.createElement('button');
    button.textContent = "submit";
    button.classList.add('submit');
    contactWrapper.appendChild(button);

    const contactRight = document.createElement('div');
    contactRight.classList.add('contact-right');
    gridWrapper.appendChild(contactRight);

    
    

}
export default createContactPage;