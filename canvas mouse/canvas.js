var button = document.getElementById("button");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var onMove = false;
var moves = 2;
var X = (canvas.width - 15)/2;
var Y = (canvas.height - 15)/2;
var rect = new Object();

 //funcion objeto

 		function dibujarRect(){
		 ctx.rect(X, Y , 15, 15);
		 ctx.fillStyle = "black";
		 ctx.fill();
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
         	 dibujarRect();
         	 if (ctx.isPointInPath(mousePos.x, mousePos.y)) {
         	 onMove = true;
         	 rect.x = X - mousePos.x;
         	 rect.y = Y - mousePos.y;
       		 }
    	 }, false);

     	 canvas.addEventListener("mousemove", function(evt) {
       		 var mousePos = oMousePos(canvas, evt);
         	 if (onMove) {
         	 ctx.clearRect(0, 0, canvas.width, canvas.height);
         	 X = mousePos.x + rect.x, Y = mousePos.y + rect.y
         	 dibujarRect();
         	 }
     	 }, false);


