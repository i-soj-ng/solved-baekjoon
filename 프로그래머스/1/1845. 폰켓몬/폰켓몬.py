def solution(nums):
    answer = 0
    variety = len(set(nums))
    half = len(nums) // 2
    
    if variety > half:
        answer = half
    else:
        answer = variety
        
    return answer