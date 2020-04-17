import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find a Pokemon with this Type."};

    let pokemon = getPokemon.getPokemonByName(req.query.type);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}
