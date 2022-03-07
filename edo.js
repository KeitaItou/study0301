/* --------------------------------
input
2
2 5
3 4

-------------------------------- */
/* --------------------------------
output
hello = 2 , world = 5
hello = 3 , world = 4

-------------------------------- */

/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
const main = () => {
  const N = lines[0].split(" ");
  //席数の取得
  const seat = parseInt(N[0]);
  //グループ数の取得
  const NumberOfGroups = parseInt(N[1]);
  let result = [];
  //すでに人が座っている席かどうか判断するための配列を定義
  //初期値は0で、座ると1になる
  for (let a = 0; a < seat; a++) {
    result[a] = 0;
  }
  for (let i = 1; i <= NumberOfGroups; i++) {
    let count = 0;
    //グループの人数と着席開始番号を取得する配列を定義
    const line = lines[i].split(" ");
    const NumberOfMembers = parseInt(line[0]);
    const StartSeat = parseInt(line[1]) - 1;
    if (NumberOfMembers + StartSeat <= seat) {
      for (let j = StartSeat; j < NumberOfMembers + StartSeat; j++) {
        if (result[j] === 0) {
          count += 1;
        }
      }
      if (count === NumberOfMembers) {
        for (let k = StartSeat; k < NumberOfMembers + StartSeat; k++) {
          result.splice(k, 1, 1);
        }
      }
    } else {
      for (let l = StartSeat; l < seat; l++) {
        if (result[l] == 0) {
          count += 1;
        }
      }
      for (let m = 0; m < NumberOfMembers + StartSeat - seat; m++) {
        if (result[m] === 0) {
          count += 1;
        }
      }
      if (count === NumberOfMembers) {
        for (let n = StartSeat; n < seat; n++) {
          result.splice(n, 1, 1);
        }
        for (let o = 0; o < NumberOfMembers + StartSeat - seat; o++) {
          result.splice(o, 1, 1);
        }
      }
    }
  }

  const init = 0;
  const customer = result.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    init
  );
  console.log(customer);
  // 空行
  console.log("");
};

/**
 * 標準入出力のための処理
 */
const reader = require("readline");

process.stdin.resume(); //入力待ち状態にする
process.stdin.setEncoding("utf8");
const rl = reader.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", main);
