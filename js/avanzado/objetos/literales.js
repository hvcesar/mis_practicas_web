let cesar = {
	name: 'César',
	bugs: 0,
	fncName: function() {
		console.log(`Yo soy ${this.name} y tu no`);
	},
	fncAddBugs: function(value){
		this.bugs = this.bugs + value;
	},
	fncDelBugs: function(value){
		this.bugs = this.bugs - value;
	}
};
console.log(`MAIN:`);
//  MAIN:
console.log(cesar.fncName());
//  Yo soy César y tu no
cesar.fncAddBugs(10);
//  undefined
console.log(`BUGS AGREGADOS:`);
//  BUGS AGREGADOS:
console.log(cesar.bugs);
//  10
cesar.fncDelBugs(10);
console.log(`BUGS ELIMINADOS:`);
//  BUGS ELIMINADOS:
console.log(cesar.bugs);
//  0
// undefined
