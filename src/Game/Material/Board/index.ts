import Letter, { pLetter } from '../Letter'

export interface LetterPosition {
  x: number,
  y: number,
}

export interface BoardInterface {
  /**
   * Can I drop the number here ?
   */
  isThereAnotherLetter: (
    lPosition: LetterPosition) => boolean

  isThisTheGoodDirection: (
    lPosition: LetterPosition, fLPostion: LetterPosition, horizontal?: boolean) => boolean

  /**
   * Drop a Letter here
   */
  drop: (
    lPosition: LetterPosition, letter: pLetter) => void

  /**
   * The cases of the board.
   */
  cases: pLetter[][] | null[][]
}

export default class Board implements BoardInterface {
  cases: pLetter[][] | null[][] =
    new Array(15).fill(new Array(15))

  isThereAnotherLetter ({ x, y }: { x: number; y: number; }) {
    if (this.cases[x][y] instanceof Letter) {
      return false;
    } else {
      return true;
    }
  }

  isThisTheGoodDirection (lPosition: LetterPosition, fLPostion: LetterPosition, horizontal?: boolean) {
    if (horizontal && lPosition.y === fLPostion.y)
      return true
    else if (!horizontal && lPosition.x === fLPostion.x)
      return true
    else
      return false;
  }

  drop (lPosition: LetterPosition, letter: pLetter) {
    const test = this.isThereAnotherLetter(lPosition);

    if (test === false) {
      //Make the letter reapear in the chevalet
    } else {
      //Make the letter be posed in the board
    }

  }
}
