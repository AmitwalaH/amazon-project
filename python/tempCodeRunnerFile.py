n = int(input("Enter the number of terms for the Fibonacci series: "))

a = 0
b = 1

c = 0

while c < n:
    print(a)
    a = b
    b = a + b