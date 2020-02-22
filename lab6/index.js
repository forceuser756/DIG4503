const Express = require ("express");
const Chalk = require("chalk");
const App = Express();
const pokemons = require("json-pokemon");
const port = 80;
const cors = require("cors");
App.use(cors());

App.use("/", Express.static("client/build"));

App.get("/id/:id", (req, res) => {
  let search = { error: "Check again, that isn't a Pokemon ID." };
    pokemons.forEach((value) => {
    if (value.id == req.params.id) {
    search = value;

      }
    });

    if (search.error) {
      res.send("Invalid ID")
      console.log(Chalk.red(search.error));
    }
    else {
      console.log(Chalk.green(req.path));
    }
    res.json(search);
  });

  App.get("/name/:name", (req, res) => {
    let search = { error: "Check again, that isn't a Pokemon." };

    pokemons.forEach((value) => {
      if (value.name == req.params.name) {
        search = value;

      }
    });

    if (search.error) {
      res.send("Invalid name")
      console.log(Chalk.red(search.error));
    }
    else {
      console.log(Chalk.green(req.path));
    }
    res.json(search);
  });
  createPokemon(event) {

      event.preventDefault();

      let name = document.querySelector("#pokemonName");
      let score = document.querySelector("#pokemonID");

      fetch("/" + name.value + "/" + id.value, {
          "method": "post"
      }).then((res) => {
          return res.json();
      }).then((processed) => {
          console.log(processed);
      });
    }

App.listen(port, () => {
    console.log("Server Active");
});
