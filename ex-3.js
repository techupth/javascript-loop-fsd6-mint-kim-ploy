// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = Infinity;
// Start coding here
for (let score of scores) {
  if (minScore > score) {
    minScore = score;
  } else {
    minScore = minScore;
  }
}

console.log(minScore);
