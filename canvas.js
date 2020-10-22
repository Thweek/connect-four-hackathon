const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 600;

//background 
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Circles

//Find out how to give canvas objects id's/classes