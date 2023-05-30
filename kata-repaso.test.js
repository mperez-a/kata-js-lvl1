const { suma,
	resta,
	array,
	fullArray,
	addName,
	addOtherName,
	nameLength,
	deleteElement,
	orderArray,
	cutArray
 } = require('./kata-lvl1');

test('Debe retornar la suma de dos numeros', () => {
	expect(suma(1, 2)).toBe(3);
	expect(suma(4, 5)).toBe(9);
	expect(suma(-1, 1)).toBe(0);
	expect(suma(-5, 5)).toBe(0);
	expect(suma(0, 10)).toBe(10);
})

test('Debe retornar la resta de dos numeros', () => {
	expect(resta(5, 5)).toBe(0);
	expect(resta(30, 10)).toBe(20);
})

test('Debe retornar un array vacío', () => {
	expect(array()).toEqual([]);
});

test('Debe retornar un array con 3 elementos', () => {
	const resultado = fullArray();
	expect(resultado.length).toBe(3);
	expect(Array.isArray(resultado)).toBe(true);
	expect(resultado).toEqual([1, 2, 3]); 
})

test('Debe retornar un array con la palabra al principio', () => {
	const resultado = addName("Patata");
	expect(resultado[0]).toBe("Patata");
	expect(resultado).toEqual(["Patata", "Sal", "Azucar"]); 
});


test('Debe retornar un array con la palabra al final', () => {
	const resultado = addOtherName("Patata");
	expect(resultado[resultado.length - 1]).toBe("Patata");
  	expect(resultado).toEqual(["Sal", "Azucar", "Patata"]);
})

test('Debe retornar la largada de la palabra', () => {
	const res = nameLength("test")
	expect(res).toBe(4);
})

test('Debe retornar un array sin el ultimo elemento', () => {
	const array = ["hola", "que", "tal"];
	const res = deleteElement(array);
	expect(res.length).toBe(2);
})

test('Debe retornar el array ordenado', () => {
	const array = ["manta", "telefono", "abrir", "cerrar"];
	expect(orderArray(array)).toEqual(array.sort())
})

test('Debe retornar el array sin los dos primeros elementos', () => {
	const array = ["1", "2", "3", "4", "5", "6"];
	expect(cutArray(array)).toEqual(["3", "4", "5", "6"]);
  });

