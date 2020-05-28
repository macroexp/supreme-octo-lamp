num = input("enter a 4 digit number:")
if len(num) == 4 and num.isdigit():
    print("yay!")
elif len(num) != 4:
    print("aw no!")