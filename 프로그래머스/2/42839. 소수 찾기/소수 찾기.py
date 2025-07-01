from itertools import permutations

def solution(numbers):
    nums = set(int(''.join(p)) for i in range(1, len(numbers)+1)
               for p in permutations(numbers, i))
    return sum(n > 1 and all(n % i for i in range(2, int(n**0.5)+1)) for n in nums)
