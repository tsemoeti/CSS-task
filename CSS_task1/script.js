const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
  planet.addEventListener('click', () => {
    if (!planet.classList.contains('clicked')) {
      planet.classList.add('clicked');
     
    } else {
      planet.classList.remove('clicked');
      planet.textContent = '';
    }
  });
});

const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  const planet = container.querySelector('.planet');
  const text = container.querySelector('.image-text');

  planet.addEventListener('click', () => {
    container.classList.toggle('clicked');
  });
});


const launchButton = document.getElementById('launchButton');
const rocketContainer = document.getElementById('rocketContainer');

launchButton.addEventListener('click', () => {
  rocketContainer.classList.add('show');
  launchButton.style.display = 'none';
});


