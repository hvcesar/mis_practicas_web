console.log("#####################################");
console.log("######## Cruce de dos arrays ########");
let my_arrary = [
	{ "id": 0, "name": "César", "year": "28", "flag": 0 },
	{ "id": 1, "name": "Ángel", "year": "29", "flag": 0 },
	{ "id": 2, "name": "Wendy", "year": "22", "flag": 0 },
	{ "id": 3, "name": "Modesta", "year": "51", "flag": 0 },
	{ "id": 4, "name": "Valeria", "year": "26", "flag": 0 }
];
console.log("-------------------------------------");
console.log("my_arrary");
console.log(my_arrary);
let other_array = [
	{ "id": 0, "name": "César", "year": "28" },
	{ "id": 4, "name": "Valeria", "year": "26" }
];
console.log("-------------------------------------");
console.log("other_array");
console.log(other_array);
let new_my_array = my_arrary.map( (row, indice, _array) => {
	let flag_other = false;
	// |||||||||||||||||||||||||||||||||||||||||||
	flag_other = other_array.find( (__other_array) => {
		return __other_array.id === row.id;
	});
	return (flag_other !== undefined)
		? { "id": row.id, "name": row.name, "year": row.year, "flag": 1 }
		: { "id": row.id, "name": row.name, "year": row.year, "flag": 0 }
});
console.log("-------------------------------------");
console.log("new_my_array");
console.log(new_my_array);
