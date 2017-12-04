/* 
	 Haga un programa en javascript que permita mover un rectángulo 
	 construido con canvas, utilizando las flechas: arriba, abajo, 
	 derecha e izquierda. (5pts.)
      */

//variables globales
 var boton = document.getElementById("boton");
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 var velocidad = 10;
 var direccion = (canvas.width- 15)/2;
 var altura = (canvas.height - 15)/2;
	
	
 //funciones de animacion
	 function dibujarRect(){
		 ctx.rect(direccion, altura , 15, 15);
		 ctx.fillStyle = "black";
		 ctx.fill();
	 }
	
	 function dibujar(){
	 	 ctx.clearRect(0,0,canvas.width,canvas.height);
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
			 if(tecla == 37){
			 	 direccion -= velocidad;		
			 }
			
			else if(tecla == 38){
				 altura -= velocidad;
			} 

			 else if(tecla == 39){
			 	 direccion += velocidad;
			}

			else if(tecla == 40){
				 altura += velocidad;
			}	
		}  //function

	 