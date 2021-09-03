import PokedexPage from "./pages/PokedexPage";
import { useState, useEffect } from "react";
import PokemonService from "./services/PokemonService";

const App = () => {
    const [loadingPokemons, setLoadingPokemons] = useState(true);
    const [pokemons, setPokemons] = useState([]);

    const retrievePokemons = async() => {
        setLoadingPokemons(true);

        await PokemonService.getPokemons(10, 10)
            .then(response => {
                setPokemons(response.data.results);
                console.log(pokemons);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        retrievePokemons();
    }, []);

    return (
        <PokedexPage />
    )
};

export default App;