function twoSum(nums: number[], target: number): number[] {

    let result = [0]

 for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    for (let e = index +1; e < nums.length; e++) {
        const secondElement = nums[e];
        if (element + secondElement === target){
            result = [index, e]
             break;
        }
    }
    if (result.length > 1){
        break;
    }
 }

 return result
    
};


// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
console.log(twoSum([2,7,11,15], 9))


// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
//console.log(twoSum([3,2,4], 6))


// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
//console.log(twoSum([3,3], 6))


