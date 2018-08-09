const argv = require("./config/yargs").argv;
const colors = require("colors");

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
    case "listar":
        crearArchivo(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log("Archivo" + `${archivo}`.rainbow + "ha sido creado correctamente"))
            .catch(e => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
}

/* let argv2 = process.argv;
console.log(argv.limite); */

/* const { crearArchivo } = require("./multiplicar/multiplicar");

//let base = "abc";

let argv = process.argv;
let paramentro = argv[2];
let base = paramentro.split("=")[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo ${archivo} ha sido creado correctamente`))
    .catch(e => console.log(e)); */