var canvas = document.getElementById('playCanvas');
var ctx = canvas.getContext('2d');
var canvasSize = { x: canvas.width, y: canvas.height }
ctx.fillRect(canvasSize.x - 50, canvasSize.y - 50, 35, 35);
