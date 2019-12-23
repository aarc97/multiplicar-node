const fs = require("fs");
const colors = require("colors");

const listarTabla = (base, limite) => {
  console.log("==============================".green);
  console.log(`======== tabla de ${base} ==========`.green);
  console.log("==============================".green);

  for (let i = 1; i < limite; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
  }
};

const crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`);
      return;
    }

    let data = "";
    for (let i = 1; i < limite; i++) {
      data += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tablas/tabla-${base}-al${limite}.txt`);
    });
  });
};

module.exports = { crearArchivo, listarTabla };
