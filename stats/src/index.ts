import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HTMLReport } from "./reports/HTMLReport";

// Create an object that satisfies DataReader interface and pass it to MatchReader
const reader = new MatchReader(new CSVFileReader("football.csv"));
reader.load();

const summary0 = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
summary0.builtAndPrintReport(reader.matches);
var team = "Bournemouth";
const summary1 = new Summary(
  new WinsAnalysis(team),
  new HTMLReport(`${team}.html`)
);
summary1.builtAndPrintReport(reader.matches);

// calling static method instead
var team = "Arsenal";
const summary2 = Summary.winsAnalysisHTMLReport(team);
summary2.builtAndPrintReport(reader.matches);
