#This programs produces the sum of all numbers entered, the difference of the first and second numbers entered, the product of the thrid and first numbers and the sum of all numbers divided by the third number
num1 = int(input("Please enter the first number: "))       
num2 = int(input("Please enter the second number: "))      
num3 = int(input("Please enter the third number: "))       
sumnum = num1+num2+num3                                     #sumnum stands for sum of numbers holds the value for the sum of all the numbers 
num4 = num1-num2                                            #num4 holds the value for the first number minus the second number
num5 = num3*num1                                            #num5 holds the value for the third number multiplied by the first number 
num6 = sumnum/num3                                          #num6 holds the value for the sum of the numbers divided by the third number
print("The sum of all the numbers is "+str(sumnum))
print("The first number minus the second number is "+str(num4))
print("The third number multiplied by the first number is "+str(num5))
print("The sum of all three numbers divided by the third number is "+str(num6))