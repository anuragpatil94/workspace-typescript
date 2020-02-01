import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8"
  })
  .trim()
  .split("\n")
  .map((row: string): string[] => row.split(","));

// Refactoring code to remove hardcoding of homeWin and awayWin
// const MatchResult = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D"
// };

// Best Way: ENUM
// Just a way to show that the properties of an enum are very closely related values
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

// console.table(matches);
let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Man United: ", manUnitedWins);
