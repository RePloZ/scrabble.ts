import { pLetter } from "../Letter";
import { LetterPosition } from "../Board";

interface _Chevalet {

  /**
   * 
   */
  letters: pLetter[]

  fLetterPosition?: LetterPosition

  drag: (letter: pLetter) => void
  pick: (letter: pLetter) => void
  addLetter: (letter: pLetter) => void
}

export default class Chevalet implements _Chevalet {
  letters: pLetter[] = new Array(7);

  constructor () {

  }

  drag (letter: pLetter) {

  }

  pick (letter: pLetter) {

  }

  addLetter (letter: pLetter) {

  }

}
