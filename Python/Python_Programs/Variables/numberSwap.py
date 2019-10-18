#This program swaps the values of num1 and num2
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))
print("num1 before swap = "+str(num1))
print("num2  before swap = "+str(num2))
num3 = num1                                   #num3 is a variable that acts as a temporary place holder
num1 = num2
num2 = num3
print("num1 after swap = "+str(num1))
print("num2 after swap = "+str(num2))
