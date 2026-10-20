from collections import deque
import math

def solution(progresses, speeds):
    answer = []
    queue = deque()
    
    for i in range(len(progresses)):
        days = 0
        
        #while progresses[i] <= 100:
            #progresses[i] += speeds[i]
            #days += 1
            
        days = math.ceil((100 - progresses[i]) / speeds[i])
        
        if i == 0:
            queue.append(days)
        
        else:
            if queue[0] >= days:
                queue.append(days)
            else:
                answer.append(len(queue))
                queue.clear()
                queue.append(days)
                
    answer.append(len(queue))
        
    return answer