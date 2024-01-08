const home = function () {
    const content = document.querySelector('#content');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Thai Lovers';
    content.appendChild(h1);

    const quote_card = document.createElement('div');
    const quote = document.createElement('p');
    const author = document.createElement('h3');
    quote_card.classList.add('card');
    author.classList.add('author');
    quote.textContent = 'There you have it, 75 food quotes and captions to post on social, paint on a sign, or DIY something fun for your restaurant.For more guidance on developing a social media strategy for your restaurant, read out Free Restaurant Social Media Marketing Guide.';
    author.textContent = '-manum';
    quote_card.appendChild(quote);
    quote_card.appendChild(author);
    content.appendChild(quote_card)

    const hour_card = document.createElement('div');
    hour_card.classList.add('card');
    hour_card.classList.add('hours')
    const hour_h2 = document.createElement('h2');
    hour_h2.textContent = 'Hours'
    hour_card.appendChild(hour_h2);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    days.forEach((day) => {
        const listing = document.createElement('p');
        listing.textContent = day + ': 10am - 8pm';
        hour_card.appendChild(listing);
    });
    content.appendChild(hour_card);

    const loc_card = document.createElement('div');
    loc_card.classList.add('card');
    const loc_h2 = document.createElement('h2');
    loc_h2.textContent = 'Location';
    const loc = document.createElement('p');
    loc.textContent = '1234 Story Road, San Jose, California';
    loc_card.appendChild(loc_h2);
    loc_card.appendChild(loc);
    content.appendChild(loc_card);
};

export default home;