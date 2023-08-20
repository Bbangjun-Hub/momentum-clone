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


