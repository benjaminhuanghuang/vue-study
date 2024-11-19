import BlockUtil from "./BlockUtil.js"

export const ROWS = 20, COLS = 10

export default class Playfield {
    blocks = null
    
    constructor() {
        this.blocks = BlockUtil.createBlock(ROWS, COLS)
    }

    isCollided(tetris, offsetRow, offsetCol, rotate) {
        const tmpBlocks = BlockUtil.deepCopy(tetris.blocks)
        let { row: tr, col: tc} = tetris.position

        tr += offsetRow
        tc += offsetCol
        BlockUtil.rotate(tmpBlocks, rotate)

        for(let r = 0; r < tmpBlocks.length; r++) {
            const pr = tr + r
            if (pr < 0) continue;
            for(let c = 0; c < tmpBlocks[r].length; c++) {
                const pc = tc + c
                if (tmpBlocks[r][c] 
                    && (pr >= ROWS || pc >= COLS || pc < 0 || this.blocks[pr][pc])) {
                    return true;
                }
            }
        }
        return false;
    }

    merge(tetris) {
        const { blocks: tBlocks, position } = tetris
        const { row: offsetRow, col: offsetCol } = position
        BlockUtil.merge(this.blocks, tBlocks, offsetRow, offsetCol)
    }

    getClearableLines(from, to) {
        const lineToClear = []
        for (let r = from; r < Math.min(to, ROWS); r++) {
            if (this.blocks[r].every(c => !!c)) {
                lineToClear.push(r)
            }
        }
        return lineToClear
    }

    clearLines(lines) {
        lines.forEach((r, i) => this.blocks.splice(r - i, 1))
        this.blocks.unshift(...BlockUtil.createBlock(lines.length, COLS))
    }

    clearAll() {
        this.blocks.forEach(r => r.fill(0))
    }
}