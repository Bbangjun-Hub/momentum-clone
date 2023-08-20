/** const images = ["1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.querySelector('.background-container');
    backgroundContainer.style.backgroundImage = `url(${bgImage})`;
  });
**/

const images = ["1.jpeg", "2.png","3.png"];

function getRandomImage() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  return `img/${chosenImage}`;
}

function setRandomBackgroundImage() {
    const randomImageSrc = getRandomImage();
    const backgroundContainer = document.querySelector('body');
    backgroundContainer.style.backgroundImage = `url(${randomImageSrc})`;
  }

window.addEventListener('load', () => {
    setRandomBackgroundImage();
  });


