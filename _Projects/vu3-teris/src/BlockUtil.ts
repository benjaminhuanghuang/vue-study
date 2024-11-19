function createRow(cols:number) {
    return new Array(cols).fill(0)
}

function createBlock(rows:number, cols:number) {
    return new Array(rows).fill([]).map(() => createRow(cols))
}

function deepCopy(blocks:number[][], callback?:any) {
    return blocks.map(row => row.map(block => callback ? callback(block): block));
}

function merge(des:number[][], src:number[][], offsetRow:number, offsetCol:number) {
    for(let r = 0; r < src.length; r++) {
        for(let c = 0; c < src[r].length; c++) {
            const dr = r + offsetRow, dc = c + offsetCol
            if (src[r][c] 
                && (dr >= 0 && dr < des.length) 
                && (dc >= 0 && dc < des[dr].length) 
                && !des[dr][dc]) {
                des[dr][dc] = src[r][c]
            }
        }
    }
    return des
}

// 对角线交换
function diagonalSwap(blocks:any) {
    for(let r = 0; r < blocks.length; r++) {
        for(let c = r + 1; c < blocks[r].length; c++) {
            [blocks[r][c], blocks[c][r]] = [blocks[c][r], blocks[r][c]]
        }
    }
}

// 上下交换
function upDownSwap(blocks:number[][]) {
    for(let r = 0; r < blocks.length / 2; r++) {
        [blocks[r], blocks[blocks.length - 1 - r]] 
            = [blocks[blocks.length - 1 - r], blocks[r]]
    }
}

function rotate(blocks:number[][], rotate = -1) {
    for (let i = 0; i < Math.abs(rotate); i++) {
        if (rotate > 0) {
            upDownSwap(blocks)
            diagonalSwap(blocks)
        } else {
            diagonalSwap(blocks)
            upDownSwap(blocks)
        }
    }
}

export default {
    createRow, 
    createBlock,
    deepCopy,
    merge,
    rotate
}