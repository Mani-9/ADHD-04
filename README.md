### ACTIVIDAD PARA DESARROLLAR HABILIDADES Y DESTREZAS (ADHD 04)

1. ¿Qué es TypeScript?
 + TypeScript es un lenguaje de programación que se basa en JavaScript y añade características extra para hacerlo mejor. Estas características adicionales permiten que el código sea más fácil de escribir sin errores, más organizado, más fácil de entender y probar. Gracias a esto se puede crear un codigo mas limpio y solido.
 
2. ¿Qué ventajas ofrece TypeScript frente a JavaScript puro?
 + Muestra errores de compilación durante el tiempo del desarrollo (precompilación). Gracias a esto las probabilidades de que se produzca en error son menores.
 
 + TypeScript admite escritura estática, por lo que la corrección se puede verificar en el momento de la compilación. Una característica que no está disponible en JavaScript.
 
 +  TypeScript puede usarse para escribir código que funcione con bibliotecas y API de JavaScript existentes.
 + El código TypeScript  puede ejecutarse en cualquier navegador o entorno que admita JavaScript.
 
 + TypeScript puede transpilar código a versiones más antiguas de JavaScript, asegurando compatibilidad con entornos que no soportan las últimas características del lenguaje.
3. ¿Cómo se instala TypeScript en VSCode?
  + Instalar Node.js: TypeScript necesita Node.js para ejecutarse, por lo que lo primero que hay que hacer es descargar e instalar Node.js desde su sitio web oficial.
 
 + Verificar la instalación de Node.js: para asegurarse de que Node.js se haya instalado correctamente, abra una ventana de terminal y escriba el siguiente comando: node -v. Si se muestra la versión de Node.js instalada, significa que la instalación fue exitosa.
 
 +  Instalar TypeScript: abra la ventana de terminal y escriba el siguiente comando:           
 `npm install -g typescript`. Este comando instalará TypeScript de forma global en su computadora.
4. ¿Cómo se compila un archivo TypeScript para convertirlo a JavaScript?
 + Para compilar nuestro código TypeScript, podemos utilizar el comando
 `tsc archivo.ts` seguido del nombre del archivo o directorio que queremos compilar. Esto generará un archivo JavaScript con el mismo nombre pero con extensión `.js`. 

5. ¿Qué extensión de archivo se utiliza para los archivos TypeScript?
 + La extencion para los archivos TypeScript es `.ts.`
 
6. ¿Cómo se define un tipo de dato en TypeScript?
 + Para definir un tipo de dato solo debemos poner el nombre de la variable despues el signo de dos puntos (:) y el tipo de la variable.
 
7. ¿Qué son los tipos de unión y cómo se declaran?
 +  Los tipos de unión permiten definir que una variable o expresión puede ser de uno o varios tipos compatibles. Se declaran utilizando el operador de tubería (|`)
 
8. ¿Qué es un tipo literal en TypeScript y para qué se utiliza?
 + Esta caracteristica permite restringir el valor de una variable a un conjunto limitado de valores. Esto es útil para definir variables con valores predefinidos, mejorar la seguridad del tipo y la autocompletación en los editores de código.
 
9. ¿Qué son los tipos enumerados (Enums) y cómo se crean?
 + Es una característica de TypeScript que permite definir conjuntos de constantes nombradas. Estas constantes representan valores relacionados entre sí y proporcionan una forma clara y segura de trabajar con valores discretos.
 
10. ¿Cómo se define un tipo alias y cuándo es útil?
 + Son caracateristicas practicas que permiten crear nombres alternativos para tipos existentes. Permiten definir un nuevo nombre que represente un tipo ya definido, mejorando la legibilidad y organización del código.
 ```javascript
 type ID = number; // Define un alias para el tipo "number"                               
 let usuarioID: ID = 1001; // Asigna un valor numérico a la variable con el tipo alias
```

11. ¿Cómo se definen las funciones con tipos en TypeScript?
 + Se pueden definir con tipos para especificar los tipos de datos de sus parámetros y valores de retorno. Esto proporciona información valiosa al compilador y mejora la seguridad de tipos del código.
```javascript
function nombreFuncion(parametro1: tipoParametro1, parametro2: tipoParametro2, ...): tipoRetorno {
  // Cuerpo de la función
}
```
12. ¿Qué son los parámetros opcionales y los parámetros predeterminados en funciones?

 + Son dos características útiles de las funciones en TypeScript que permiten mayor flexibilidad en la forma de definir y llamar a las funciones.
 
 + Los parámetros opcionales son aquellos que no es necesario proporcionar cuando se llama a la función. En TypeScript, puedes definir un parámetro como opcional utilizando el operador ? después del nombre del parámetro.
 + Los parámetros predeterminados permiten especificar un valor por defecto para un parámetro. Si no se proporciona un valor para ese parámetro al llamar a la función, se usará el valor predeterminado.
 
13. ¿Cuáles son algunas mejores prácticas para escribir código limpio y mantenible en TypeScript?
  + Utilizar sangría consistente, espacios en blanco adecuados y comentarios claros para mejorar la legibilidad del código.
  + Seguir convenciones de nomenclatura consistentes para variables, funciones y clases.
  + Utilizar herramientas de formato de código para asegurar una formateación uniforme.
  + Mantener las funciones pequeñas y enfocadas en una sola tarea específica.
  + Extraer funcionalidad común en funciones separadas para mejorar la reutilización.
  + Utilizar nombres de funciones descriptivos que indiquen claramente su propósito.


