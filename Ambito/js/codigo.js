var nuevaVariable = "Soy global,";

function hacerAlgo(param){
	var nuevaVariable = "Soy local"
	console.log(nuevaVariable);
	console.log(param);
}

hacerAlgo("Un argumento");
	console.log(nuevaVariable);