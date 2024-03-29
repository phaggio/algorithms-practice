// #220

// Given an array of integers, find out whether there are two distinct indices i and j 
// in the array such that the absolute difference between nums[i] and nums[j] 
// is at most t and the absolute difference between i and j is at most k.

// Examples
// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true

// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true

// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false


const containsNearbyAlmostDuplicate = (nums, k, t) => {

  for (let i = 0; i < nums.length; ++i) {
    const currInt = nums[i];
    for (let j = i + 1; j <= i + k; ++j) {
      const compareInt = nums[j];
      if (Math.abs(currInt - compareInt) <= t) return true;
    }
  }

  return false;
}

export default containsNearbyAlmostDuplicate

// time O of n*k