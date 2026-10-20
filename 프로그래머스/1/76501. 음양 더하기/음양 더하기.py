def solution(absolutes, signs):
    answer = 0
    
    for i in range(len(signs)):
        if signs[i] == True:
            answer += absolutes[i]
        elif signs[i] == False:
            answer -= absolutes[i]
            
    return answer