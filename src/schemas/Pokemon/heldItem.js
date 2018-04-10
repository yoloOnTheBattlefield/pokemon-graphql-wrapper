export default `
  type VersionDetail {
    rarity: Float
    version: Info
  }

  type PokemonHeldItem {
    item: Info
    version_details: [VersionDetail]
  }
`;
