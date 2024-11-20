import BlockUtil from "./BlockUtil.js";
import Tetris from "./Tetris.js";

export const ROWS = 20,
  COLS = 10;

export default class Playfield {
  blocks: number[][];

  constructor() {
    this.blocks = BlockUtil.createBlock(ROWS, COLS);
  }

  isCollided(
    tetris: Tetris,
    offsetRow: number,
    offsetCol: number,
    rotate: number
  ) {
    const tmpBlocks = BlockUtil.deepCopy(tetris.blocks);
    let { row: tr, col: tc } = tetris.position;

    tr += offsetRow;
    tc += offsetCol;
    BlockUtil.rotate(tmpBlocks, rotate);

    for (let r = 0; r < tmpBlocks.length; r++) {
      const pr = tr + r;
      if (pr < 0) continue;
      for (let c = 0; c < tmpBlocks[r].length; c++) {
        const pc = tc + c;
        if (
          tmpBlocks[r][c] &&
          (pr >= ROWS || pc >= COLS || pc < 0 || this.blocks[pr][pc])
        ) {
          return true;
        }
      }
    }
    return false;
  }

  merge(tetris: Tetris) {
    const { blocks: tBlocks, position } = tetris;
    const { row: offsetRow, col: offsetCol } = position;
    BlockUtil.merge(this.blocks, tBlocks, offsetRow, offsetCol);
  }

  getClearableLines(from: number, to: number) {
    const lineToClear = [];
    for (let r = from; r < Math.min(to, ROWS); r++) {
      if (this.blocks[r].every((c) => !!c)) {
        lineToClear.push(r);
      }
    }
    return lineToClear;
  }

  /*

  */
  clearLines(lines: number[]) {
    // remove the row from the blocks one by one
    lines.forEach((r: number, i: number) => this.blocks.splice(r - i, 1));
    // add new rows to the top
    this.blocks.unshift(...BlockUtil.createBlock(lines.length, COLS));
  }

  clearAll() {
    this.blocks.forEach((r) => r.fill(0));
  }
}
