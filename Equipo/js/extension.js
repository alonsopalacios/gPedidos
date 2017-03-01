var Equipo = new Object();

Equipo.nombre ="";
Equipo.jugadores=0;
Equipo.juegan=0;
Equipo.suplentes=0;
Equipo.categoria=0;
Equipo.DirectorTecnico="";

Equipo.setnombre = function(){
	var valor = prompt("Introduce el nombre del Equipo:")
	this.nombre = valor;
};

Equipo.getnombre = function(){
	return this.nombre;
};

Equipo.setjugadores = function(){
	var valor = prompt("Introduce el Nº de jugadores:")
	this.jugadores = valor;
};

Equipo.getjugadores = function(){
	return this.jugadores;
};

Equipo.setjuegan = function (){
	var valor = prompt("Introduce la cantidad de jugadores que juegan:")
	this.juegan = valor;
};

Equipo.getjuegan = function(){
	return this.juegan;
};

Equipo.setsuplentes = function(){
	var valor = prompt("Introduce el Nº de suplentes:")
	this.suplentes = valor;
};

Equipo.getsuplentes = function(){
	return this.suplentes;
};

Equipo.setcategoria = function(){
	var valor = prompt("Introduce la cateoria del Equipo:")
	this.categoria = valor;
};

Equipo.getcategoria = function(){
	return this.categoria;
};

Equipo.setDirectorTecnico = function(){
	var valor = prompt("Introduce el nombre del Director Tecnico:")
	this.DirectorTecnico = valor;
};

Equipo.getDirectorTecnico = function(){
	return this.DirectorTecnico;
};

Equipo.presentaDatos = function(){
	document.getElementById('nombre').innerHTML ='Nombre ' + this.nombre;
	document.getElementById('jugadores').innerHTML ='Nº de jugadores ' + this.jugadores;
	document.getElementById('juegan').innerHTML ='Juegan un partido ' + this.juegan;
	document.getElementById('suplentes').innerHTML ='suplentes' + this.suplentes;
	document.getElementById('categoria').innerHTML ='Categoria del Equipo ' + this.categoria;
	document.getElementById('DirectorTecnico').innerHTML ='Nombre del Director Tecnico ' + this.DirectorTecnico;
};