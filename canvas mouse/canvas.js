 var button = document.getElementById("button");
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 var onMove = false;
 var X = (canvas.width - 15)/2;
 var Y = (canvas.height - 15)/2;


 class Rectangulo {
 	 constructor(){
 	  	 this.x = X;
 	  	 this.y = Y;
 	  	 this.w = 15;
 	  	 this.h = 15;
 	 }
 	 	 
 	 dibujar(){
 	  	 ctx.rect(X, Y , 15, 15);
	 	 ctx.fillStyle = "black";
	 	 ctx.fill();
 	 }
 }

 var rect = new Rectangulo();

 function actualizar(){
 	 ctx.fillStyle = "#f0f0f0";
	 ctx.fillRect(0,0, canvas.width, canvas.height);
	 rect.dibujar();
 }
	
 function oMousePos(canvas, evt) {
 	 var rect = canvas.getBoundingClientRect();
  	 return { // devuelve un objeto
          x: Math.round(evt.clientX - rect.left),
          y: Math.round(evt.clientY - rect.top)
     };
 }

 canvas.addEventListener("mousedown", function(evt) {   
  	 var mousePos = oMousePos(canvas, evt);
     if (ctx.isPointInPath(mousePos.x, mousePos.y)) {
         onMove = true;
         actualizar();
         rect.x = X - mousePos.x;
         rect.y = Y - mousePos.y;
     }
 }, false);

 canvas.addEventListener("mousemove", function(evt) {
  	 var mousePos = oMousePos(canvas, evt);
     if (onMove) {
     	 ctx.clearRect(0,0,canvas.width, canvas.height);
         X = mousePos.x + rect.x, Y = mousePos.y + rect.y
         actualizar();
     }
 }, false);

 canvas.addEventListener("mouseup", function(evt) {
  	 onMove = false;
 }, false);