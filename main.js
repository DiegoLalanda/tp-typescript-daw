// 2. Crear clases que implementan la interfaz Animal
var Perro = /** @class */ (function () {
    function Perro(nombre) {
        this.nombre = nombre;
    }
    Perro.prototype.gritar = function () {
        return "¡Guau!";
    };
    return Perro;
}());
var Gato = /** @class */ (function () {
    function Gato(nombre) {
        this.nombre = nombre;
    }
    Gato.prototype.gritar = function () {
        return "¡Miau!";
    };
    return Gato;
}());
var Vaca = /** @class */ (function () {
    function Vaca(nombre) {
        this.nombre = nombre;
    }
    Vaca.prototype.gritar = function () {
        return "¡Muuu!";
    };
    return Vaca;
}());
// 3. Crear función describirAnimal
function describirAnimal(animal) {
    console.log("El animal ".concat(animal.nombre, " hace ").concat(animal.gritar()));
}
// 4. Crear constantes con instancias de animales
var perro = new Perro("Firulais");
var vaca = new Vaca("Lola");
var gato = new Gato("Michi");
// 5. Ejecutar describirAnimal para cada animal
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);
