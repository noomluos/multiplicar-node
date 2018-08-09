const fs = require("fs");
const colors = require("colors");


let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        let resul = base * i;
        console.log(`${base} x ${i} = ${resul}\n`);
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            let resul = base * i;
            data += `${base} x ${i} = ${resul}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}