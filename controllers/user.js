const { response, request } = require("express");

const getUser = (req = request, res = response) => {
  const { q='hola', id='0', name='no name' } = req.query;
  res.json({
    msg: "get API",
    q,
    id,
    name,
  });
};

const postUser = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: `post API`,
    nombre,
    edad,
  });
};

const putUser = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API",
    id,
  });
};

const delUser = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "delete API",
    id: id
  });
};

module.exports = {
  getUser,
  putUser,
  postUser,
  delUser,
};
