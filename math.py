import math
import numpy

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
arg = int(input("Provide a number:"))

print(math.factorial(arg))

result = list(range(arg + int(1)))
del result[0]

def multiplylist(numbers):
    total = 1
    for x in numbers:
        total *= x
    return total

print(result)

if math.factorial(arg) == multiplylist(result):
    print(multiplylist(result))
elif math.factorial(arg) != multiplylist(result):
    print("Something went wrong.")
#using math.factorial to confirm rather than numpy.prod because the latter seems to break after arg = 20.

#print(numpy.prod(result))
#print(multiplylist(result))
#print(math.prod(result))
    