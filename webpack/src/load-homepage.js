import foodImage from './assets/images/food.jpg';

export default function loadHomepage() {
    
    import('./homepage.css')
        .then(() => {

            const content = document.getElementById('content');
            
            // create headline
            const headline = document.createElement('h2');
            headline.textContent = 'Welcome to My Restaurant';

            const text = document.createElement('p');
            text.textContent = 'This is a really lovely restaurant with food to keep you energised and focussed';

            const imageHolder = document.createElement('div');
            imageHolder.className = 'imageHolder';

            const image = document.createElement('img');
            image.src = foodImage;
            image.alt = 'Image of food being made';


            // append elements
            content.appendChild(headline);
            content.appendChild(imageHolder);
            content.appendChild(text);

            imageHolder.appendChild(image);

        })
}  