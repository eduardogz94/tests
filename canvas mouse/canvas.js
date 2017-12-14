 var button = document.getElementById("button");
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 var onMove = false;
 var X = (canvas.width - 15)/2;
 var Y = (canvas.height - 15)/2;


 class Rectangulo {	 	 
 	 dibujar(){
 	 	 ctx.clearRect(0,0, canvas.width,canvas.height);
 	  	 ctx.rect(X, Y , 15, 15);
	 	 ctx.fillStyle = "black";
	 	 ctx.fill();
 	 }
 }

 var rect = new Rectangulo();

 function actualizar(){
	 rect.dibujar();
 }
	
 function oMousePos(canvas, evt) {
 	 var client = canvas.getBoundingClientRect();
  	 return { // devuelve un objeto
          x: Math.round(evt.clientX - client.left),
          y: Math.round(evt.clientY - client.top)
     };
 }

 canvas.addEventListener("mousedown", function(evt) {   
  	 var mousePos = oMousePos(canvas, evt);
     if (ctx.isPointInPath(mousePos.x, mousePos.y)) {
         onMove = true;
         rect.x = X - mousePos.x;
         rect.y = Y - mousePos.y;
     	 
         actualizar();
     }
 }, false);

 canvas.addEventListener("mousemove", function(evt) {
  	 var mousePos = oMousePos(canvas, evt);
     if (onMove) {
         X = mousePos.x + rect.x, 
         Y = mousePos.y + rect.y
         actualizar();
     }
 }, false);

 canvas.addEventListener("mouseup", function(evt) {
  	 onMove = false;
 }, false);