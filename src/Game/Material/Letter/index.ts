export { letters } from './letters.json'

export interface pLetter {
  value: number;
  letter: string;
}

export class Letter<pLetter> {
  public value: number;
  public letter: string;

  constructor ({ value, letter }:
    { value: number; letter: string }) {
    this.value = value;
    this.letter = letter;
  }
}

export default Letter;
