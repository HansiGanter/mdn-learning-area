const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 450, 100, 150);
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 475, 100, 100);
ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
ctx.fillRect(25, 500, 175, 50);
ctx.strokeStyle = "rgb(255, 255, 255)";
ctx.lineWidth = 5;
ctx.strokeRect(25, 425, 175, 200);


function degToRad(degrees) {
    return degrees * Math.PI / 180;
}
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(150, 250);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 250 + triHeight);
ctx.lineTo(50, 250);
ctx.fill();

ctx.fillStyle = "rgb(0, 0, 255)";
ctx.beginPath();
ctx.arc(150, 306, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 306, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 306);
ctx.fill();

ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);

canvas.setAttribute("aria-label", "Canvas text");

const image = new Image();
image.src = "firefox.png";
image.addEventListener("load", () => {
    ctx.drawImage(image, 320, 20);
    ctx.drawImage(image, 40, 40, 100, 100, 350, 350, 100, 100);
});
canvas.setAttribute("aria-label", "Firefox Logo");

