// 1. Crear interfaz Animal
interface Animal {
    nombre: string;
    gritar(): string;
}

// 2. Crear clases que implementan la interfaz Animal
class Perro implements Animal {
    constructor(public nombre: string) {}

    gritar(): string {
        return "¡Guau!";
    }
}

class Gato implements Animal {
    constructor(public nombre: string) {}

    gritar(): string {
        return "¡Miau!";
    }
}

class Vaca implements Animal {
    constructor(public nombre: string) {}

    gritar(): string {
        return "¡Muuu!";
    }
}

// 3. Crear función describirAnimal
function describirAnimal(animal: Animal): void {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

// 4. Crear constantes con instancias de animales
const perro: Perro = new Perro("Firulais");
const vaca: Vaca = new Vaca("Lola");
const gato: Gato = new Gato("Michi");

// 5. Ejecutar describirAnimal para cada animal
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);