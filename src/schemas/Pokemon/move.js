/*
{
  "move": Info
  "version_group_details": [{
      "level_learned_at": 0,
      "version_group": Info
      "move_learn_method": Info
  }]
}
*/
export default `
  type VersionGroupMoveDetail {
    level_learned_at: Float
    version_group: Info
    move_learn_method: Info
  }
  type PokemonMove {
    move: Info
    version_group_details: [VersionGroupMoveDetail]
  }
`;
