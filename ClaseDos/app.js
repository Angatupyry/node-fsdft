const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola, mundo");
});

// endpoint
app.get("/estudiantes", (req, res) => {
  const estudiantes = [
    { nombre: "Nicolás", apellido: "Ribeiro" },
    { nombre: "César", apellido: "Rolón" },
    { nombre: "Santiago", apellido: "Rodriguez" },
    { nombre: "Nati", apellido: "Ciraolo" },
  ];

  return res.send({ success: true, data: estudiantes });
});

// endpoint
app.get("/repositorios/:id", async (req, res) => {
  const userId = req.params.id;
  const response = await axios(`https://api.github.com/users/${userId}`);

  const repos = await axios(response.data.repos_url);

  return res.send(response.data);
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
