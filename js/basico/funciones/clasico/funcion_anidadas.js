function clases(a, b, c) {
	function clase_a(a, b) {
		return `${a}${b}`;
	}

	function clase_b(c) {
		return c;
	}

	let kilometros 	= clase_a(a, b);
	let metros 			= clase_b(c);
	console.log(`Velocidad de la luz: ${kilometros} kilometros, ${metros} metros`);
}

clases(299, 792, 458);
// Velocidad de la luz: 299792 kilometros, 458 metros
// undefined
