// # 11

// Given n non-negative integers a1, a2, ..., an , 
// where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, 
// such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.


const min = (num1, num2) => {
  if (num1 <= num2) return num1;
  return num2;
}


const maxArea = height => {
  if (!height || height.length === 1) return 0;

  let left = 0
  let right = height.length - 1;

  let maxArea = 0;

  while (left < right) {
    let area = min(height[left], height[right]) * (right - left);
    if (area > maxArea) maxArea = area;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

export default maxArea



