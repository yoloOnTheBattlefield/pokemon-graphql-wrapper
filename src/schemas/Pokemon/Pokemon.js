export default `
  
  type Pokemon {
    id: Float!
    name: String!
    base_experience: Float!
    height: Float!
    is_default: Boolean!
    order: Float!
    weight: Float!
    abilities: [PokemonAbility]!
    forms: [Form]!
    game_indices: [VersionGameIndex]!
    held_items: [PokemonHeldItem]
    location_area_encounters: String
    moves: [PokemonMove]
    sprites: PokemonSprite
    species: Info
    stats: [PokemonStats]
    types: [PokemonType]
  }


  type Query { getPokemon(name: String! ): Pokemon }
`;
