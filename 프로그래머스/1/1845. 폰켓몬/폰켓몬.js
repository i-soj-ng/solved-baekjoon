function solution(nums) {
    var answer = 0;
    let hash = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            hash.set(nums[i], hash.get(nums[i]) + 1);
            continue;
        }
        
        hash.set(nums[i], 1);
    }
    
    if (hash.size >= nums.length / 2)
        return nums.length / 2;
    
    else
        return hash.size;
}