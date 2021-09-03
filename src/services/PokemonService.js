import PokemonAPI from "../api/PokemonAPI";

const getPokemons = async (limit, offset) => {
    return await PokemonAPI.get("/pokemon", {
        params: {
            limit: limit,
            offset: offset
        }
    })
};

const PokemonService = {
    getPokemons
};

export default PokemonService;