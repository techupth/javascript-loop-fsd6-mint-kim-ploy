// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0];
// Start coding here
// minScore = Math.min(...scores);
for (let num of scores) {
  if (minScore > num) {
    minScore = num;
  }
}

console.log(minScore);
