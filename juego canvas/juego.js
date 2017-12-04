/* 
	 Haga un programa en javascript que permita mover un rectángulo 
	 construido con canvas, utilizando las flechas: arriba, abajo, 
	 derecha e izquierda. (5pts.)
      */

//variables globales
 var boton = document.getElementById("boton");
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 var ancho = canvas.width;
 var alto = canvas.height;
 var x = canvas.width/2;
 var y = canvas.height/2;
 var velocidad = 10;
 var direccion = (canvas.width- 15)/2;
	
	
 //funciones de animacion
	 function dibujarRect(){
		 ctx.rect(direccion, this.y - 15 , 15, 15);
		 ctx.fillStyle = "black";
		 ctx.fill();
	 }
	
	 function dibujar(){
	 	 ctx.clearRect(0,0,ancho,alto);
		 ctx.beginPath();
		 dibujarRect();
		 ctx.closePath();
	 }

	 function frame(){
	 	 dibujar();
		 requestAnimationFrame(frame);
	 }

	 function iniciar(){
		 frame();
	 }


 //funciones de control	
	 function keyDownHandler(event){
		 var tecla = event.keyCode;
			 if(tecla == 39){
			 	 direccion += velocidad;		
			 }
		
			 else if(tecla == 37){
			 	 direccion -= velocidad;
			}

			else if(tecla == 40){
				direccion += velodad;
			}	 
		}

	 