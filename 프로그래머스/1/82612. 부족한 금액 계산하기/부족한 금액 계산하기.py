def solution(price, money, count):
    answer = -1
    n = 0
    total = 0

    while count != 0:
        n += 1
        total += price * n
        count -= 1
    
    answer = money - total
    
    if answer >= 0:
        return 0
    else:
        return abs(answer)