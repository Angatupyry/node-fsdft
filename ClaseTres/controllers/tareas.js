const db = require("../db/index");
const get = async (req, res, next) => {
  try {
    const tareas = await db.query("select * from tarea");

    return res.send({
      tareas: tareas.rows,
    });
  } catch (error) {
    return next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { titulo, prioridad } = req.body;

    const nuevaTarea = {
      titulo,
      prioridad,
      autor_id: 1,
    };

    await db.query(
      "Insert into tarea(titulo, prioridad, autor_id) values ($1, $2, $3)",
      [nuevaTarea.titulo, nuevaTarea.prioridad, 1]
    );

    return res.send({
      tareaNueva: nuevaTarea,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { get, create };
