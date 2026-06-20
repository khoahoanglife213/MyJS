// TODO 1: dùng if...else if...else để in ra xếp loại
let score = 7.2;
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Cần cố gắng");
}

// TODO 2: viết vòng for in các số từ 1 đến 5
console.log("In các số từ 1 đến 5 bằng vòng for:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// TODO 3: viết vòng for tính tổng từ 1 đến 5
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log("Tổng =", total); // 15
