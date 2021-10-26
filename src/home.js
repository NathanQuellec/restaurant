import './style.css';
import PizzaBg from './assets/background.jpg';


function createHomePage() {
    // image of pizza in the background
    document.body.style.backgroundImage = `url(${PizzaBg})`;

    const content = document.querySelector("#content");
    console.log(content)
    // create content (headline and some text)
    const headline = document.createElement('h1');
    const description = document.createElement('p');
    headline.textContent = "Chez Luigi !";
    description.textContent = "Bienvenue dans notre pizzeria, unique au monde ! Notre specialité est la pizza à la sardine ...";

    content.appendChild(headline);
    content.appendChild(description);
}

export default createHomePage;


