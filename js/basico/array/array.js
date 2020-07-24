let arreglo = new Array(3);
// undefined
arreglo
	// (3) [empty × 3]
	// 	length: 3
	// 	__proto__: Array(0)

arreglo[0] = 299;
// 299
arreglo
	// (3) [299, empty × 2]
	// 	0: 299
	// 	length: 3
	// 	__proto__: Array(0)

arreglo[1] = 792;
// 792
arreglo
	// (3) [299, 792, empty]
	// 	0: 299
	// 	1: 792
	// 	length: 3
	// 	__proto__: Array(0)

arreglo[2] = 458;
// 458
arreglo
	// (3) [299, 792, 458]
	// 	0: 299
	// 	1: 792
	// 	2: 458
	// 	length: 3
	// 	__proto__: Array(0)
arreglo[0]
// 299
arreglo[1]
// 792
arreglo[2]
// 458
