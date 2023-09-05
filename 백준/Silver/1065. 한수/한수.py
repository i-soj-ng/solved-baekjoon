n = int(input())
x = 1
cnt = 0

while x <= n:
    if 0 < x < 100:
        cnt += 1
    else:
        number_list = list(str(x))

        flag = 1
        diff = int(number_list[0]) - int(number_list[1])
        for i in range(1, len(number_list) - 1):
            if int(number_list[i]) - int(number_list[i + 1]) != diff:
                flag = 0
                break

        if flag == 1:
            cnt += 1

    x += 1

print(cnt)