/* --------------------------------
input
2
3

-------------------------------- */
/* --------------------------------
output
6

-------------------------------- */

/* --------------------------------
input
0
99

-------------------------------- */
/* --------------------------------
output
0

-------------------------------- */

/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
const main = () => {
    const a = lines[0]
    const b = lines[1]
    const result = a*b
    console.log(result)
    console.log('')
}

/**
 * 標準入出力のための処理
 */
const reader = require('readline')

process.stdin.resume()　//入力待ち状態にする
process.stdin.setEncoding('utf8')
const rl = reader.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = []
rl.on('line', (line) => {
    lines.push(line)
})

rl.on('close', main)
