function removeElement(nums: number[], val: number): number {
    // Pointer to track the position of the next non-val element
    let j = 0;

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not the target value
        if (nums[i] !== val) {
            nums[j] = nums[i]; // Move the element to the current position of j
            j++; // Increment j
        }
    }
    
    // j now represents the new length of the modified array
    return j;
}
