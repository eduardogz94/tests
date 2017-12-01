/* 
	Haga un programa en javascript que permita mover un rectángulo 
	construido con canvas, utilizando las flechas: arriba, abajo, 
	derecha e izquierda. (5pts.)
*/

var boton = document.getElementById("boton");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ancho = canvas.width;
var alto = canvas.height;
var x = canvas.width/2;
var y = canvas.height - 40;
var pX = (canvas.width - 15)/2;
	
		class Rectangle {
		contructor(x,y){
			this.x = x;
			this.y = y;
			this.w = 1;
			this.h = 1;
			this.dir = 0;
		}

		mover(){
			this.x = pX;
		}

		dibujar(){
			ctx.fillRect(this.x, this.y, this.w, this.h);
		}
	}

//funciones de animacion

	function dibujarRect(){
		ctx.beginPath()
		var test = new Rectangle(x,y);
		ctx.rect(pX, this.y , 15, 15);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
	
	function dibujar(){
		ctx.clearRect(0,0,ancho,alto);
		dibujarRect();
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
			if(tecla == 39 ) {
				pX += 15;
			}

			else if(tecla == 37){
				pX += -15;
			}
	}

	function keyUpHandler(event){
		var tecla = event.keyCode;
			if(tecla == 39 || tecla == 37){
				pX = 0;
			}
	}