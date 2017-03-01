var persona = new Object();

persona.sexo = "";
persona.edad = 0;
persona.nombre = "";

persona.setnombre = function(){
	var valor = prompt("Introduce tu nombre:")
	this.nombre = valor;
};

persona.getnombre = function(){
	return this.nombre;
};

persona.setedad = function(){
	var valor = prompt("Introduce tu edad:")
	this.edad = valor;
};

persona.getedad = function(){
	return this.edad;
};

persona.setsexo = function(){
	var valor = prompt("Introduce tu sexo")
	this.sexo = valor;
};

persona.getsexo = function(){
	return this.sexo;
};


persona.presentaDatos = function(){
	document.getElementById('nombre').innerHTML ='Nombre Introducido ' + this.nombre;
	document.getElementById('edad').innerHTML = 'Edad Introducido ' + this.edad;
	document.getElementById('sexo').innerHTML ='Sexo Introducido ' + this.sexo;
};




