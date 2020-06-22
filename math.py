import math

def f(x):
    return x+3

def multiply(x, y):
    product = x*y
    return product

def div(x, y):
    product = x/y
    return product

#print(div(2,3))

#x = math.sqrt(math.pi)

def myfunction():
    global x
    x = 3
    print(2 + x)

def check(n):
    if n == 1:
        return False
    for x in range(2, (int)(math.sqrt(n))+1):
        if n % x == 0:
            return False
    return True
"""
n = input("Check if a number is prime: ")
if check(int(n)): print("Prime")
#if check is true?
else: print("Not prime")
"""
