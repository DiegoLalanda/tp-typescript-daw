/* 
TP Typescript - Desarrollo de Aplicaciones Web
GRUPO: FERNANDA ELOLA,  DIEGO JAVIER LALANDA

Tecnicatura Universitaria en Desarrollo Web
UNER FACULTAD DE CIENCIAS DE LA ADMINISTRACION
2025
*/

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

// 6. Crear un Enum DiasSemana
enum DiasSemana {
    Lunes = "Lunes",
    Martes = "Martes",
    Miércoles = "Miércoles",
    Jueves = "Jueves",
    Viernes = "Viernes",
    Sábado = "Sábado",
    Domingo = "Domingo"
}

// 7. Crear una variable que pueda contener número o string
let entrada: string | number;

// Asignar el string “Messi”
entrada = "Messi";
console.log(`Variable entrada:`, entrada); 

// Reemplazar por por el número 10
entrada = 10;
console.log(`Variable entrada luego del cambio:`, entrada); 

// 8. Crear clase genérica que implemente la interfaz Fila
interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
        console.log(`Elemento agregado:`, elemento); 
    }

    remover(): T | undefined {
        const elementoRemovido = this.elementos.shift();
        console.log(`Elemento removido:`, elementoRemovido);
        return elementoRemovido;
    }
}

// 9. Crear una fila para números, una fila para strings, y una fila para animales
let filaNumeros: FilaGenerica<number> = new FilaGenerica<number>();
let filaStrings: FilaGenerica<string> = new FilaGenerica<string>();
let filaAnimales: FilaGenerica<Animal> = new FilaGenerica<Animal>();

// 10. Agregar elementos a las filas
filaNumeros.agregar(100);
filaNumeros.agregar(200);
filaNumeros.agregar(300);

filaStrings.agregar("manzana");
filaStrings.agregar("banana");
filaStrings.agregar("frutilla");

filaAnimales.agregar(perro);
filaAnimales.agregar(vaca);
filaAnimales.agregar(gato);

// 10. Remover un elemento de cada fila
const numeroRemovido = filaNumeros.remover();
const stringRemovido = filaStrings.remover();
const animalRemovido = filaAnimales.remover();