function longestSubarray(nums: number[]): number {
    // Step 1: Find the maximum element in the array
    const maxNum = Math.max(...nums);
    
    let maxLength = 0; // To track the longest subarray
    let currentLength = 0; // To track the current contiguous subarray length
    
    // Step 2: Iterate through the array to find subarrays with the maximum value
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === maxNum) {
            currentLength++; // Extend the current subarray
        } else {
            // Compare and update the maximum length found
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 0; // Reset for the next potential subarray
        }
    }
    
    // Step 3: Final check to update maxLength with the last segment
    maxLength = Math.max(maxLength, currentLength);
    
    return maxLength;
}
