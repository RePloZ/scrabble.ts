import { letters, pLetter, Letter } from '../Letter'

export default class Bag {
  public content: Letter<pLetter>[] = [];

  constructor () {
    for (const { value, count, letter } of letters) {
      for (let i = 0; i < count; i++) {
        this.content = [...this.content, new Letter({ value, letter })];
      }
    }
  }

  private getRandomInt (max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  letters (): number {
    return this.content.length;
  }

  /**
   * Pick a random letter
   */
  pick (): pLetter | null {
    if (this.content.length === 0)
      return null;

    const index = this.getRandomInt(this.content.length - 1);
    const letter = this.content[index];

    this.content = this.content
      .filter((value, ind) => ind === index ? false : true);
    return letter;
  }

}

