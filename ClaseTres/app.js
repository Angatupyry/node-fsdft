const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usuarios = [
  {
    id: 1,
    nombre: "Ronal",
    apellido: "Dinho",
    edad: 42,
  },
  {
    id: 2,
    nombre: "Otra",
    apellido: "Persona",
    edad: 4,
  },
  {
    id: 3,
    nombre: "Otra",
    apellido: "Persona",
    edad: 4,
  },
];

app.get("/", (req, res) => {
  res.send("New");
});

app.get("/repositorios/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const response = await axios(`https://api.github.com/users/${userId}`);

    const repos = await axios(response.data.repos_url);
    req.body;

    const reposName = [];

    repos.data.forEach((ronaldinho) => {
      reposName.push(ronaldinho.name);
    });

    res.send(reposName);
  } catch (error) {
    return next(error);
  }
});

app.get("/algo", (req, res, next) => {
  setTimeout(() => {
    try {
      objetoQueNoExiste.name = "No existo";
      res.send(objetoQueNoExiste);
    } catch (error) {
      return next(error);
    }
  }, 1000);
});

app.get("/usuarios", (req, res, next) => {
  try {
    return res.send(usuarios);
  } catch (error) {
    return next(error);
  }
});

app.post("/usuarios", (req, res, next) => {
  try {
    const newUser = req.body;
    if (newUser.nombre && newUser.apellido) {
      usuarios.push(newUser);
      return res.send({ success: true, data: newUser, message: "All good!" });
    } else {
      return res.send({ success: false, data: [], message: "Faltan campos" });
    }
  } catch (error) {
    return next(error);
  }
});

app.put("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, edad } = req.body;

  const index = usuarios.findIndex((u) => u.id === id);

  if (index >= 0) {
    usuarios[index].nombre = nombre;
    usuarios[index].edad = edad;
    return res.send({ data: usuarios, message: "Actualizado" });
  }

  return res.send({ message: "No se encontró el id" });
});

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
