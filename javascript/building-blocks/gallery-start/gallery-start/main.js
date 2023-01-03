const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg',]

/* Declaring the alternative text for each image file */

const alternative = ['eye', 'rock', 'flowers', 'pharao', 'butterfly']

/* Looping through images */

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', alternative[i]);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', e => {
    displayedImage.setAttribute('src', e.target.getAttribute('src'))
    displayedImage.setAttribute('alt', e.target.getAttribute('alt'))
})

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', e => {
    if (e.target.getAttribute('class') == 'dark') {
        e.target.setAttribute('class', 'light')
        e.target.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else {
        e.target.setAttribute('class', 'dark')
        e.target.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }
})