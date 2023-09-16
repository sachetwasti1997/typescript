import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MathResults';

const csvFileReader = new CsvFileReader('football.csv')
const reader = new MatchReader(csvFileReader);
reader.load();

let manUnitedWin = 0;

reader.matches
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
