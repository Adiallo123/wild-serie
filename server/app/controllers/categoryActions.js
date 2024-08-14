// Some data to make the trick
const tables = require("../../database/tables");
/*
const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
*/
  const browse = async (req, res) => {
      const categoriesFromDB = await tables.category.readAll();
  
      res.json(categoriesFromDB);
    };
  
/*
  const browse = (req, res) =>{
    res.json(categories);
  }
  */
  const read = (req, res) => {
    res.send(`Bienvenue sur la liste des catégories ${req.params.id}`);
  }

  module.exports = { browse, read };