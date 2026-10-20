def solution(n, arr1, arr2):
    answer = []
    
    for i in range(n):
        map1 = ''
        b1 = list(format(arr1[i], 'b'))
        b2 = list(format(arr2[i], 'b'))
        
        temp = n - len(b1)
        for t in range(temp):
            b1.insert(0, '0')
            
        temp = n - len(b2)
        for t in range(temp):
            b2.insert(0, '0')
            
        for j in range(n):
            if b1[j] == '0' and b2[j] == '0':
                map1 += ' '
            else:
                map1 += '#'
                
        answer.append(map1)
        
    return answer