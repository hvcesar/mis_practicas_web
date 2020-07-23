function mtdArguments() {
	return `Cantidad de parámetros: ${arguments.length}`;
}

mtdArguments("Hello", 299, true);
// "Cantidad de parámetros: 3"

// CONCATENAR ARGUMENTS
function mtdArguments() {
	let all_arguments = "";
	for(let i = 0; i < arguments.length; i++) {
		all_arguments += `${arguments[i]}-`;
	}
	return `Estos son todos los argumentos: ${all_arguments}`;
}

mtdArguments(299, 792, 458);
// "Estos son todos los argumentos: 299-792-458-"
