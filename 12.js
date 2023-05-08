const arr = [1, 4, 4, 6, 8, 4];
const dp = Array(6).fill(1);

for (let i = 0; i < arr.length - 1; i++) {
  for (let target = i + 1; target < arr.length; target++) {
    if (arr[i] < arr[target]) {
      dp[target] = Math.max(dp[i] + 1, dp[target]);
    }
  }
  console.log(dp);
}

const lis = Math.max(...dp);
