n = int(input())
a = 3
b = 5
cnt = 0

while n >= 0:
    if n % b == 0:
        cnt += int(n // b)
        print(cnt)
        break

    n -= a
    cnt += 1

else:
    print(-1)