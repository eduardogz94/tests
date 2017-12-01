/*
	Construya un WEBComponent que extienda las propiedades del elemento input y le incluya un 
	nuevo método llamado clear () que permita borrar el contenido del input, luego 
	construya un programa que utilice el componente.
*/
	//creando el input element
	var inputProto = Object.create(HTMLInputElement.prototype);

	//añadiendo propiedades al prototype
	inputProto.onClear = function(){
		this.value = "";
	}

	inputProto.setDimensions = function(){
		this.style.top = x + "px";
		this.style.bottom = y + "px";
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
	//registando al body el componente
	document.body.appendChild(comp);
