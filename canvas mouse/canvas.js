 var button = document.getElementById("button");
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 var onMove = false;
 var z = (canvas.width - 15)/2;
 var v = (canvas.height - 15)/2;

 class Rectangulo {
 	constructor(){
 	 this.x = z;
 	 this.y = v;
 	 this.h = 20;
 	 this.w = 20;
 	 this.right = this.x + this.w;
 	 this.left = this.y + this.h;
 	}

 	 dibujar(){	 	 
 		 ctx.clearRect(0,0, canvas.width, canvas.height);
	 	 ctx.fillStyle = "black";
	 	 ctx.fillRect(this.x, this.y , this.w, this.h);
 	 }
 }

 var rect = new Rectangulo();

 rect.dibujar();
	
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
         z = z - mousePos.x;
         v = v - mousePos.y;
         rect.dibujar(); 
     }
 }, false);

 canvas.addEventListener("mousemove", function(evt) {
  	 var mousePos = oMousePos(canvas, evt);
     if (onMove) {
     	 z = mousePos.x + rect.x; 
         v = mousePos.y + rect.y;
       	 rect.dibujar();
     }
 }, false);

 canvas.addEventListener("mouseup", function(evt) {
  	 onMove = false;
 }, false);