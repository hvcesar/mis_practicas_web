let my_array = [];
// undefined
my_array.length
// 0
my_array
	// []
	// length: 0
	// __proto__: Array(0)
my_array.push(299)
// 1
my_array.length
// 1
my_array
// [299]
// 	0: 299
// 	length: 1
// 	__proto__: Array(0)
my_array.push(792)
// 2
my_array.length
// 2
my_array
// (2) [299, 792]
// 	0: 299
// 	1: 792
// 	length: 2
// 	__proto__: Array(0)
my_array.push(458)
// 3
my_array.length
// 3
my_array
	// (3) [299, 792, 458]
	// 0: 299
	// 1: 792
	// 2: 458
	// length: 3
	// __proto__: Array(0)