// Refactoring code to remove hardcoding of homeWin and awayWin
// const MatchResult = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D"
// };

// Best Way: ENUM
// Just a way to show that the properties of an enum are very closely related values
export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}
