const simpleGit = require("simple-git");

// Inicializar una instancia de simple-git en la ruta actual
const git = simpleGit();

// Ejecutar 'git add .' en la ruta actual

//exec("")
git
  .status((err, status) => {
    console.log(status, err);
  })
  .add(".")
  .then(() => {
    console.log("Archivos agregados a Git");
  })
  .catch((error) => {
    console.error("Error al agregar archivos a Git:", error);
  });