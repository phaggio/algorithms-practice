// #70

// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. 
// In how many distinct ways can you climb to the top?

// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let last2 = 1;
  let last = 2;
  let ways;
  for (let i = 3; i <= n; ++i) {
    ways = last + last2;
    last2 = last;
    last = ways;
  }

  return ways;
}

export default climbStairs