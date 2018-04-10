import axios from "axios";
export default {
  Query: {
    getPokemon: async (parent, { name }, { pokeApi, redis }) => {
      const url = `${pokeApi}/pokemon/${name}`;
      const cachedPokemon = await redis.get(url);
      if (cachedPokemon) {
        return JSON.parse(cachedPokemon);
      }
      const pokemon = await axios.get(url);
      await redis.set(url, JSON.stringify(pokemon.data));

      return pokemon.data;
    }
  }
};
