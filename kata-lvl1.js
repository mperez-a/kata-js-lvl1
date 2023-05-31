
//Escribe una funcion que retorne la suma de los numeros que recibe
function suma(a, b) {
	//escribe el codigo aqui
	return (a + b);
}

//Escribe una funcion que retorne la resta de los dos numeros que recibe
function resta(a, b) {
	//escribe el codigo aqui
	return (a - b);
}

//Escribe una funcion que retorne un array vacio
function array() {
	//escribe el codigo aqui
	let array = [];
	return (array);
}

//Escribe una funcion que retorne un array con 3 elementos
function fullArray () {
	let array = ["hola", "adios", "buenas"];
	return (array);
}

//Usa el metodo adecuado para anadir el parametro al principio del array
function addName(word) {
	const array = ["Sal", "Azucar"];
	//escribe el codigo aqui
	array.unshift(word);
	return (array);

}

//Usa el metodo adecuado para anadir el parametro al final del array
function addOtherName(word) {
	const array = ["Sal", "Azucar"]
	//escribe el codigo aqui
	array.push(word);
	return (array);
}

//Usa el metodo adecuado para retornar la largada del parametro
function nameLength(word) {
	//escribe el codigo aqui
	let len = word.length;
	return (len);
}

//Usa el metodo adecuado que retorne el array que llega por parametro sin el ultimo elemento
function deleteElement(array) {
	//escribe el codigo aqui
	array.pop();
	return (array);
}


//Usa el metodo adecuado para ordenar el array del parametro
function orderArray(array) {
	//escribe aqui tu codigo
	array.sort();
	return (array);
}

//Usa el metodo adecuado para devolver el array sin el primer y el segundo elemento
function cutArray(array) {
	array.shift();
	array.shift();
	return (array);
}


module.exports = {
	suma,
	resta,
	array,
	fullArray,
	addName,
	addOtherName,
	nameLength,
	deleteElement,
	orderArray,
	cutArray
}
