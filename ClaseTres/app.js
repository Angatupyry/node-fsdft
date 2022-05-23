const express = require("express");
const usersRoutes = require("./routes/user");
const reposRoutes = require("./routes/repos");
const tareasRoutes = require("./routes/tareas");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);
app.use("/repositorios", reposRoutes);
// app.use("/tareas", tareasRoutes);

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
