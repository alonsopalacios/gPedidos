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
	//Meodo para cambiar la fecha del pedido
	this.setfechaPedido = function (){
		this.fechaPedido = fechaPedido;
	};

	//Metodo para conocer el total de articulos del pedido
	this.gettotalArticulos = function(){
		return this.totalArticulos;
	};
	//Metodo para cambiar el total de articulos del pedido
	this.settotalArticulos = function(){
		this.totalArticulos = totalArticulos
	};
		//Metodo para conocer el total de pedidos
	this.gettotalPedido = function(){
		return this.totalPedido;
	};
	//Metodo para cambiar el total de pedidos
	this.settotalPedido = function(){
		this.totalPedido = totalPedido
	};
		//Metodo para conocer el direccion de Entrega del Pedido
	this.getdireccioEntrega = function(){
		return this.direccioentrega;
	};
	//Metodo para cambiar la direccion de entrega del pedido
	this.setdireccionEntrega =function(direccionEntrega){
		this.direccionEntrega=direccionEntrega
	};
	
			//Metodo para conocer la direccion de facturación del Pedido
	this.getdirecciofactración= function(){
		return this.direccionFacturación;
	};
	//Metodo para cambiar la direccion de facturación del pedido
	this.setdireccionFacturacion = function (direccionFacturación){
		this.direccionFacturación = this.direccionFacturación
	};

}