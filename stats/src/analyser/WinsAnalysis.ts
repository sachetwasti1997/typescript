import { MatchData } from "../MatchData";
import { MatchResult } from "../MathResults";
import { Analyser } from "../Summary";

export class WinsAnalysis implements Analyser {

  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    matches
      .filter((cellMatch) => {
        return (
          (cellMatch[1] === 'Man United' &&
            cellMatch[5] === MatchResult.HomeWin) ||
          (cellMatch[2] === 'Man United' &&
            cellMatch[5] === MatchResult.AwayWin)
        );
      })
      .map((m) => {
        console.log(m);
        wins++;
      });

    console.log(wins);
    return `Team ${this.team} won ${wins} matches.`;
  }

}