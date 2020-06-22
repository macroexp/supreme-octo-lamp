def timMin(numbers):
    lowest = float("inf")
    for number in numbers:
        if number < lowest:
            lowest = number
    return lowest

def testTimMin(numbers):
    return timMin(numbers) == min(numbers)
cases = [
    [1,2,3,4,5],
    [-1,-2,-3,-4,-5],
    [-100,-2000,3000,4,5],
    [100,90,80,70,60]
]
allSucceeded = True
for case in cases:
    allSucceeded = testTimMin(case)
    if not allSucceeded:
        print("Failed on case: ")
        print(case)
if allSucceeded:
    print("Success!")