
const body = document.querySelector('body');

const header = function () {
    const header = document.createElement('header');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    body.appendChild(header);
    
};

const content = function () {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    body.appendChild(content);
}

const footer = function () {
    const footer = document.createElement('footer');
    footer.textContent = 'Made By BQ310';
    body.appendChild(footer);
}

const first = function () {
    header();
    content();
    footer();
};

export default first;