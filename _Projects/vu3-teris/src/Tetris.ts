import BlockUtil from "./BlockUtil.js";

export const ROWS = 4,
  COLS = 4;

// 7 种不同类型的俄罗斯方块
// 每个俄罗斯方块信息使用一个 4 * 4 的二维数据记录, 其中有小方块的位置为 1, 否则为 0
export const TETRIS_TYPE = [
  [
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ],
];

export default class Tetris {
  position = { row: 0, col: 0 };
  blocks: number[][];

  constructor(type: number, rotate: number) {
    this.blocks = BlockUtil.deepCopy(
      TETRIS_TYPE[type],
      (block: number) => block * (type + 1)  // value of block will be the color
    );
    if (rotate > 0) {
      this.rotate(rotate);
    }
  }

  move(offsetRow: number, offsetCol: number) {
    this.position.row += offsetRow;
    this.position.col += offsetCol;
  }

  rotate(rotate: number) {
    BlockUtil.rotate(this.blocks, rotate);
  }
}
