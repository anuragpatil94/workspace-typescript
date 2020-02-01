import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";

// Create an object that satisfies DataReader interface and pass it to MatchReader
const reader = new MatchReader(new CSVFileReader("football.csv"));
reader.load();

console.table(reader.matches);

let manUnitedWins = 0;

for (let match of reader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Man United: ", manUnitedWins);
