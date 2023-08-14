const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  console.log(req.query);
  let access = false;

  const usuarioHabilitado = users.find(
    (user) => user.email === email && user.password === password
  );
  if (usuarioHabilitado) {
    access = true;
  }
  return res.status(200).json({ access });
};

module.exports = { login };
