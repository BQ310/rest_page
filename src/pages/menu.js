const menu_card = function (list, title) {
    const content = document.querySelector('#content');

    const app_card = document.createElement('div');
    app_card.classList.add('card');
    const app = document.createElement('h2');
    app.textContent = title;
    const app_list = document.createElement('ul');
    list.forEach((name) => {
        const entry = document.createElement('li');
        entry.textContent = name;
        app_list.appendChild(entry);
    });
    app_card.appendChild(app);
    app_card.appendChild(app_list);
    content.appendChild(app_card)
};

const menu = function () {
    menu_card(['Fruit Salad', 'Cocktail', 'Nuggets', 'Sandwich', 'French Fries'], 'Appetizers');
    menu_card(['Cheeseburgers','Cheese Sandwich', 'Chicken Burger','Spicy Chicken', 'Hot Dog'], 'Main Courses');
}

export default menu;