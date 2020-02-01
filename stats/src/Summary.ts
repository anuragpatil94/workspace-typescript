import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HTMLReport } from "./reports/HTMLReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisHTMLReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HTMLReport(`${team}.html`));
  }

  // Delegating other classes if what Composition is
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  builtAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
