console.log("###############################");
let my_arrary = [
	{ "id": 0, "name": "César", "year": "28", "flag": 1 },
	{ "id": 1, "name": "Ángel", "year": "29", "flag": 0 },
	{ "id": 2, "name": "Wendy", "year": "22", "flag": 0 },
	{ "id": 3, "name": "Modesta", "year": "51", "flag": 0 },
	{ "id": 4, "name": "Valeria", "year": "26", "flag": 1 }
];
console.log("###############################");
let new_array = my_arrary.map( (item, id, full_array) => {
    return item.flag === 1 
    ? { "id": item.id, "user": item.name, "status": "TRUE" } 
    : { "id": item.id, "user": item.name, "status": "FALSE" };
});
console.log("###############################");
console.log("########## new_array ##########");
console.log(new_array);
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {id: 0, user: "César", status: "TRUE"}
// 1: {id: 1, user: "Ángel", status: "FALSE"}
// 2: {id: 2, user: "Wendy", status: "FALSE"}
// 3: {id: 3, user: "Modesta", status: "FALSE"}
// 4: {id: 4, user: "Valeria", status: "TRUE"}
