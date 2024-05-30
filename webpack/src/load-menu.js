export default function loadMenu() {

    import('./menu.css')
        .then(() => {
            const content = document.getElementById('content');

            const heading = document.createElement('h2');
            heading.textContent = "Our menu";
            heading.className = 'heading';

            // structuring menu

            const menuHolderOne = document.createElement('div');
            menuHolderOne.className = 'menuSectionOne';
            const menuHolderTwo = document.createElement('div');
            menuHolderTwo.className = 'menuSectionTwo';
            const menuHolderThree = document.createElement('div');
            menuHolderThree.className = 'menuSectionThree';

            // creating entree

            const entreeHeading = document.createElement('h3');
            entreeHeading.textContent = "Entree"

            const entreeList = document.createElement('ul')
            const scallops = document.createElement('li')
            scallops.className = 'menu-items';
            scallops.textContent = 'scallop with yuzu sauce nitrogenated'

            const fries = document.createElement('li')
            fries.className = 'menu-items';
            fries.textContent = "truffle fries with pink salt"

            const ceviche = document.createElement('li')
            ceviche.className = 'menu-items';
            ceviche.textContent = 'king snapper with mexican marinade including onions, tomato and lime'


            // creating mains

            const mainHeading = document.createElement('h3');
            mainHeading.textContent = "Mains"

            const mainList = document.createElement('ul')
            const duck = document.createElement('li')
            duck.className = 'menu-items';
            duck.textContent = 'panfried duck-leg with a sweet demiglaze sauce'

            const pork = document.createElement('li')
            pork.className = 'menu-items';
            pork.textContent = 'grilled pork, shredded and places within sliders with coleslaw'

            const fish = document.createElement('li')
            fish.className = 'menu-items';
            fish.textContent = 'poisson de dejeuner black blah blah'

            //creating desserts

            const dessertHeading = document.createElement('h3');
            dessertHeading.textContent = "Dessert"

            const dessertList = document.createElement('ul')
            const brownie = document.createElement('li')
            brownie.className = 'menu-items';
            brownie.textContent = 'dark chocolate brownie served with vanilla ice-cream on top'

            const lemonTart = document.createElement('li')
            lemonTart.className = 'menu-items';
            lemonTart.textContent = 'lemon yuzu tart collected from the mountaneous northern ranges'

            const bananaBread = document.createElement('li')
            bananaBread.className = 'menu-items';
            bananaBread.textContent = 'earl grey flavoured banana bread for $50 dollars'

            // append items for grid

            menuHolderOne.appendChild(entreeHeading);
            menuHolderOne.appendChild(entreeList);

            menuHolderTwo.appendChild(mainHeading);
            menuHolderTwo.appendChild(mainList);

            menuHolderThree.appendChild(dessertHeading);
            menuHolderThree.appendChild(dessertList);

            // append entree items

            entreeList.appendChild(scallops);
            entreeList.appendChild(fries);
            entreeList.appendChild(ceviche);

            // append main items

            mainList.appendChild(duck);
            mainList.appendChild(pork);
            mainList.appendChild(fish);

            // append dessert items

            dessertList.appendChild(brownie);
            dessertList.appendChild(lemonTart);
            dessertList.appendChild(bananaBread);

            // append grid to content

            content.appendChild(heading);
            content.appendChild(menuHolderOne);
            content.appendChild(menuHolderTwo);
            content.appendChild(menuHolderThree);
        })
}