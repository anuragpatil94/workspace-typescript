import fs from "fs";
import { MatchResult } from "./MatchResult";

// New Tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CSVFileReader {
  data: MatchData[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8"
      })
      .trim()
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
