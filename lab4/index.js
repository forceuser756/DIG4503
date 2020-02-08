const Express = require ("express");
const Chalk = require("chalk");
const App = Express();
const pokemons = require("json-pokemon");
const port = 80;

App.get("/id/:id", (req, res,) => {
  let search = { error: "Check again, that isn't a Pokemon ID." };
    pokemons.forEach((value) => {
    if (value.id == req.params.id) {
    search = value;
    res.send(value);
      }
    });

    if (search.error) {
      res.send("Invalid ID")
      console.log(Chalk.red(search.error));
    }
    else {
      console.log(Chalk.green(req.path));
    }
  });

  App.get("/name/:name", (req, res) => {
    let search = { error: "Check again, that isn't a Pokemon." };

    pokemons.forEach((value) => {
      if (value.name == req.params.name) {
        search = value;
        res.send(value);
      }
    });

    if (search.error) {
      res.send("Invalid name")
      console.log(Chalk.red(search.error));
    }
    else {
      console.log(Chalk.green(req.path));
    }
  });

App.listen(port, () => {
    console.log("Server Active");
});
