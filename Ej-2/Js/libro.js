var libro= new Object();

 libro.tituloLibro = "E Mundo de Terabithia"            //Titulo del Libro
 libro.autorLibro = "Kalo Eunde" ;             //Autor del Libro
 libro.Editorial = "Alina" ;               //Editorial del Libro
 libro.Nºpáginas = 428;             //Nº de páginas que contiene el libro
 libro.ISBN = 842174642525;                  //ISBN

	//Mostrar el Nº de Paginas
Libro.mostrarPaginas = function(Nºpáginas){
	alert("El numero de la Pagina es " + libro.Nºpáginas);
};


Libro.mostrarTituloAutor = function(tituloLibro){
	alert("El titulodel libro es " + libro.tituloLibro + "y el Autor es " + libro.autorLibro);
};

libro.mostrarPaginas();
libro.mostartTituloAutor();