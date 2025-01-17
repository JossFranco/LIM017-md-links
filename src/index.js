const {
  existRoute,
  convertToAbsolute,
  verifyDirectory,
  openedDirectory,
  filterFile,
  gettinlinks,
  statusLinks,
} = require("./md-links");

const mdLinks = (path, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    const converPath = convertToAbsolute(path);
    let arrayMd = [];
    if (existRoute(converPath)) {
      if (verifyDirectory(converPath)) {
        const arrFile = openedDirectory(converPath);
        if (arrFile.length > 0) {
          arrayMd = filterFile(arrFile);
          if (arrayMd.length > 0) {
            const arrLinks = gettinlinks(arrayMd);
            if (arrLinks.length > 0) {
              if (options.validate) {
                statusLinks(arrLinks).then((res) => resolve(res));
              } else {
                resolve(arrLinks);
              }
            } else {
              reject("⛔️ No hay enlaces, introduce otra ruta.");
            }
          } else {
            reject("⛔️ No hay archivos .md, ingrese otra ruta.");
          }
        } else {
          reject("⛔️ El directorio está vacío, ingrese otra ruta.");
        }
      } else {
        arrayMd = filterFile([converPath]);
        if (arrayMd.length > 0) {
          const arrLinks = gettinlinks(arrayMd);
          if (arrLinks.length > 0) {
            if (options.validate) {
              statusLinks(arrLinks).then((res) => resolve(res));
            } else {
              resolve(arrLinks);
            }
          } else {
            reject(" ⛔️ No hay enlaces, introduce otra ruta.");
          }
        } else {
          reject("⛔️ No hay archivos .md, ingrese otra ruta.");
        }
      }
    } else {
      reject(" ⛔️ La entrada de ruta no existe, ingrese otra ruta.");
    }
  });
};
module.exports = { mdLinks };
