const getUsers = (req, res, next) => {
  try {
    return res.send(usuarios);
  } catch (error) {
    return next(error);
  }
};

const createUser = (req, res, next) => {
  try {
    const newUser = req.body;
    if (!newUser.nombre || !newUser.email) {
      return res.send({
        success: false,
        data: [],
        message: "No se puede dejar vacío el campo nombre ni el campo email",
      });
    }

    if (!/^\S+@\S+\.\S+$/.test(newUser.email)) {
      return res.send({
        success: false,
        message: "Email inválido",
      });
    }

    usuarios.push(newUser);

    return res.send({ success: true, data: usuarios });
  } catch (error) {
    return next(error);
  }
};

const updateUser = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, edad } = req.body;

    const index = usuarios.findIndex((u) => u.id === id);

    if (index >= 0) {
      usuarios[index].nombre = nombre;
      usuarios[index].edad = edad;
      return res.send({ data: usuarios, message: "Actualizado" });
    }

    return res.send({ message: "No se encontró el id" });
  } catch (error) {
    return next(error);
  }
};

const usuarios = [
  {
    id: 1,
    email: "",
    nombre: "Ronal",
    apellido: "Dinho",
    edad: 42,
  },
  {
    id: 2,
    email: "",
    nombre: "Otra",
    apellido: "Persona",
    edad: 4,
  },
  {
    id: 3,
    email: "",
    nombre: "Otra",
    apellido: "Persona",
    edad: 4,
  },
];

module.exports = { getUsers, createUser, updateUser };
