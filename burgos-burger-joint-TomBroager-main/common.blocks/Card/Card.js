document.addEventListener('DOMContentLoaded', function(){

    let cardArray = [
        {image: 'images/favorit01.jpg', altText: 'Burger', heading: 'Grilled Burger', text: '65kr.'},
        {image: 'images/favorit02.jpg', altText: 'Burger', heading: 'The Firehouse', text: '70kr.'},
        {image: 'images/favorit03.jpg', altText: 'Burger', heading: 'Grilled Burger', text: '90kr.'},
        {image: 'images/favorit04.jpg', altText: 'Burger', heading: 'Super Vegan', text: '70kr.'}
    ];
    
    function createCard(){
        let card = document.createElement('div');                               // Variabel card med værdien: Opretter et div tag
        card.className = 'Card Card-container__card';
    
        let figure = card.appendChild(document.createElement('figure'));        // Variabel figure med værdien: Opretter et figure tag inden i div tagget
        figure.className = 'Card__figure';

        let image = figure.appendChild(document.createElement('img'));
        image.className = 'Card__image';
        image.src = cardArray[i].image;                                         // img tag src attribute værdi = cardArray[index].object property
        image.alt = cardArray[i].altText;                                       // img tag alt attribute værdi = cardArray[index].object property
    
        let article = card.appendChild(document.createElement('article'));
        article.className = 'Card__article';
    
        let heading = article.appendChild(document.createElement('h2'));
        heading.className = 'Card__heading';
        heading.textContent = cardArray[i].heading;
        
        let textContent = article.appendChild(document.createElement('p'));
        textContent.className = 'Card__textContent';
        textContent.textContent = cardArray[i].text;
    
        let button = card.appendChild(document.createElement('button'));
        button.className = 'Card__button';
        button.textContent = 'FAVORIT';
    
        document.querySelector('#Card-container').appendChild(card);            // Tilføjer card html elementer til Card container
    };
    
    for(i = 0; i < cardArray.length; i++){
        createCard();                                                           // Loop som kalder createCard function for hvert object i cardArray
    };

})

