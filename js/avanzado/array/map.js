let my_arrary = [
	{ "id": 0, "name": "César", "year": "28", "flag": 1 },
	{ "id": 1, "name": "Ángel", "year": "29", "flag": 0 },
	{ "id": 2, "name": "Wendy", "year": "22", "flag": 0 },
	{ "id": 3, "name": "Modesta", "year": "51", "flag": 0 },
	{ "id": 4, "name": "Valeria", "year": "26", "flag": 1 }
];

let new_array = my_arrary.map( (item, id) => {
    console.log(item);
    console.log(id);
    console.log(item.name);
    return item.flag === 1 ? item.name : "";
});
// {id: 0, name: "César", year: "28", flag: 1}
// 0
// César
// {id: 1, name: "Ángel", year: "29", flag: 0}
// 1
// Ángel
// {id: 2, name: "Wendy", year: "22", flag: 0}
// 2
// Wendy
// {id: 3, name: "Modesta", year: "51", flag: 0}
// 3
// Modesta
// {id: 4, name: "Valeria", year: "26", flag: 1}
// 4
// Valeria
// undefined
// new_array
// (5) ["César", "", "", "", "Valeria"]
// 0: "César"
// 1: ""
// 2: ""
// 3: ""
// 4: "Valeria"
// length: 5
// __proto__: Array(0)
let new_array2 = my_arrary.map( (item, id) => {
    return item.flag === 1 
        ? { "user": item.name, "status": "INSERTADO" } 
        : { "user": item.name, "status": "ELIMINADO" };
});
// (5) [{…}, {…}, {…}, {…}, {…}]
// {user: "César", status: "INSERTADO"}
// {user: "Ángel", status: "ELIMINADO"}
// {user: "Wendy", status: "ELIMINADO"}
// {user: "Modesta", status: "ELIMINADO"}
// {user: "Valeria", status: "INSERTADO"}
// length: 5
// __proto__: Array(0)