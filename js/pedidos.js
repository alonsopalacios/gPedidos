/*
----------Gestión de Pedidos--------------
Fecha:27/02/2017
Autor: Alonso Palacios
version:1.0
Descripcion:Un pedido consta de los sguientes:
- Una fecha de pedido
- Un número total de artículos
- Un total de pedido
- Una dirección de entrega
- Una dirección de facturación

*/


function Pedido(fechaPedido, totalArticulos, totalPedido, direccionEntrega, direccionFacturación){
	this.fechaPedido = fechaPedido;
	this.totalArticulos = totalArticulos;
	this.totalPedido = totalPedido;
	this.direccionEntrega =direccionEntrega;
	this.direccionFacturación = direccionFacturación;

	//Metodo para conocer la fecha del pedido
	this.getFechaPedido = function(){
		return this.fechaPedido;
	};

	//Metodo para conocer el total de articulos del pedido
	this.gettotalArticulos = function(){
		return this.totalArticulos;
	};
		//Metodo para conocer el total de pedidos
	this.gettotalPedido = function(){
		return this.totalPedido;
	};
		//Metodo para conocer el direccion de Entrega del Pedido
	this.getdireccioEntrega = function(){
		return this.direccioentrega;
	};
			//Metodo para conocer la direccion de facturación del Pedido
	this.gettotalPedido = function(){
		return this.direccionFacturación;
	};
	this.setdireccionEntrega =function(direccionEntrega){
		this.direccionEntrega=direccionEntrega
	};
	this.setdireccionFacturacion = function (direccionFacturación){
		this.direccionFacturación = this.direccionFacturación
	};

}