const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width= 800;
canvas.height=800;

/*ctx.fillRect(200,200,50,200);
ctx.fillRect(400,200,50,200);

ctx.lineWidth=5;
ctx.strokeRect(300,300,50,100);

ctx.fillRect(200,200,200,20);

ctx.moveTo(150,200);
ctx.lineTo(500,200);
ctx.lineTo(325,100);
ctx.lineTo(150,200);
ctx.fill();*/



ctx.fillRect(200,200,15,100);
ctx.fillRect(350,200,15,100);
ctx.fillRect(250,200,60,200);

ctx.arc(280,130,50,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260,130,5,0,2*Math.PI);
ctx.arc(300,130,5,0,2*Math.PI);
ctx.fill();