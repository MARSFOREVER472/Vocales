// Existen 2 maneras diferentes de hacerlo!!!!

function vowelCounter(str)
{
    // let allVowels = 'aeiouAEIOU'; // TODAS LAS VOCALES.
    
    let allVowels = ["a", "e", "i", "o", "u"]; // OTRA FORMA DE HACERLO...
    let vCounter = 0; // CONTADOR DE VOCALES.

    // VAMOS A MEJORAR NUESTRO CÓDIGO...

    // MEDIANTE UN CICLO "for":

    /*

    for (let i = 0; i < str.length; i++)
    {
        if (allVowels.indexOf(str[i]) !== -1)
        {
            console.log("THE VALUE OF str[i] IS: " + str[i]);
            vCounter += 1;
        }
    }

    */

    // EL MÉTODO "toLowerCase()" CONVIERTE LOS CARÁCTERES DE "str" A MINÚSCULAS...

    for (let i of str.toLowerCase())
    {
        if (allVowels.includes(i))
        {
            vCounter++;
        }
    }

    console.log(`Your original string is: \n ${str} \n`);
    console.log(`The text contains ${vCounter} vowel(s).`);
    return vCounter;
}

console.log(vowelCounter("Hello Transantofapasta and companies!"));

// RECAPITULANDO:

// ENTENDIENDO EL MÉTODO "includes()"...

// let cities = ['Miami', 'Paris', 'London', 'Madrid'];

// console.log(cities.includes(London));

// LA SALIDA SERÁ "TRUE".

// console.log(cities.includes(Atlanta));

// LA SALIDA SERÁ: "FALSE".

// VAMOS A VER CÓMO TRABAJA LA FUNCIÓN "indexOf":

// 1.- MEDIANTE QUÉ POSICIÓN SE ENCUENTRA LA VOCAL 'e':

x = 'HellouwMARSFOREVER472';
idx = x.indexOf('e');
console.log(idx);

// LA POSICIÓN EN LA QUE SE ENCUENTRA LA VOCAL 'e' ESTÁ EN 1.

// 2.- MEDIANTE QUÉ POSICIÓN SE ENCUENTRA LA VOCAL 'u':

x = 'HellouwMARSFOREVER472';
idx = x.indexOf('u');
console.log(idx);

// LA POSICIÓN EN LA QUE SE ENCUENTRA LA VOCAL 'u' ESTÁ EN 5.

// 3.- MEDIANTE QUÉ POSICIÓN SE ENCUENTRA LA VOCAL 'o':

x = 'HellouwMARSFOREVER472';
idx = x.indexOf('o');
console.log(idx);

// LA POSICIÓN EN LA QUE SE ENCUENTRA LA VOCAL 'e' ESTÁ EN 4.

// 4.- MEDIANTE QUÉ POSICIÓN SE ENCUENTRA LA LETRA 'w' QUE NO ES VOCAL:

x = 'HelloMARSFOREVER472';
idx = x.indexOf('w');
console.log(idx);

// P.D. : PARA NUESTRO ALGORITMO, LO QUE NOS INTERESA SABER ES:

// ¿QUÉ ME DEVUELVE EL MÉTODO "indexOf()" CUANDO LE PASAMOS UN CARÁCTER QUE NO SE ENCUENTRA EN UN STRING SOBRE LA CUAL APLICAMOS ESE MÉTODO?

// EN ESTE ÚLTIMO EJEMPLO, LA LETRA 'w' NO SE ENCUENTRA EN ESTA FRASE, PUES ÉSTE DEVUELVE UN -1.

// PARA ENTENDER EL DESARROLLO DEL CÓDIGO, NECESITAS ENTENDER CÓMO FUNCIONA EL MÉTODO "indexOf".