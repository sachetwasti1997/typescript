import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MathResults';

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWin = 0;

reader.data
  .filter((cellMatch) => {
    return (
      (cellMatch[1] === 'Man United' && cellMatch[5] === MatchResult.HomeWin) ||
      (cellMatch[2] === 'Man United' && cellMatch[5] === MatchResult.AwayWin)
    );
  })
  .map((m) => {
    console.log(m);
    manUnitedWin++;
  });

console.log(manUnitedWin);
