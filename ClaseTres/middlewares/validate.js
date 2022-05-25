const jwt = require("jsonwebtoken");

const TOKEN_SECRET = "UnaClaveParaFirmarelToken";

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado" });
  }

  try {
    const userVerified = jwt.verify(token, "UnaClaveParaFirmarelToken");
    req.user = userVerified;
    next();
  } catch (error) {
    res.status(400).json({ error: "El Token no es válido" });
  }
};

module.exports = {
  verifyToken,
  TOKEN_SECRET,
};
