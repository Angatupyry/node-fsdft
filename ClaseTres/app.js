const express = require("express");
const usersRoutes = require("./routes/user");
const reposRoutes = require("./routes/repos");
const tareasRoutes = require("./routes/tareas");
const cors = require("cors");

const app = express();

const PORT = 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", usersRoutes);
app.use("/repositorios", reposRoutes);
app.use("/tareas", tareasRoutes);

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
