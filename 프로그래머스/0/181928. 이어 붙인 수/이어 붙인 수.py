def solution(num_list):
    answer = 0
    str_odd = "" #홀수
    str_even = "" #짝수
    
    for n in num_list:
        if n % 2 == 0:
            str_odd += str(n)
        else:
            str_even += str(n)
            
    answer = int(str_odd) + int(str_even)
    
    return answer