import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HTMLReport } from "./reports/HTMLReport";

// Create an object that satisfies DataReader interface and pass it to MatchReader
const reader = new MatchReader(new CSVFileReader("football.csv"));
reader.load();

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );
const summary = new Summary(new WinsAnalysis("Bournemouth"), new HTMLReport());

summary.builtAndPrintReport(reader.matches);
