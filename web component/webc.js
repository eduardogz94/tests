/*
	 Construya un WEBComponent que extienda las propiedades del elemento input y le incluya un 
	 nuevo metodo llamado clear () que permita borrar el contenido del input, luego 
	 construya un programa que utilice el componente.
     */
     
	 //creando el input prototype object
	 var inputProto = Object.create(HTMLInputElement.prototype);

	 //añadiendo propiedades al prototype
	 inputProto.onClear = function(){
		 this.value = "";
	 }

	 inputProto.setDimensions = function(width,height){
		 this.style.width = width + "px";
		 this.style.height = height + "px";
	 }

	 //registrando componente con su prototype
	 var inputComp = document.registerElement("eg-input",
		 {
		 prototype: inputProto,
		 extends:'input'
		 }
	 );

	 //instanciando componente
	 var comp = new inputComp();
	
	 function test1(){
		 comp.onClear();
	 }

	 function test2(){
		 comp.setDimensions(100,200);
	 }


	 //registando al body el componente
	 document.body.appendChild(comp);
