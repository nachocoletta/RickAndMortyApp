let myFavorites = [];

const postFav = (req, res) => {
  // console.log(req.body);
  myFavorites.push(req.body);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;

  myFavorites = myFavorites.filter((char) => char.id !== Number(id));
  return res.status(200).json(myFavorites);
};

const getFav = (req, res) => {
  // console.log(myFavorites);
  return res.status(200).json(myFavorites);
};
const getFavPrev = (req, res) => {
  // console.log(myFavorites);
  return res.status(200).json(myFavorites);
};
module.exports = { postFav, deleteFav, getFav };
