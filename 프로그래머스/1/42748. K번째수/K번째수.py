def solution(array, commands):
    answer = []
    
    for (i, j, k) in commands:
        sliced_arr = array[i-1:j]
        sliced_arr.sort()
        answer.append(sliced_arr[k-1])
        
    return answer