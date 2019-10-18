#This program checks if a number entered by a user is divisible by 2 and 5, 2 or 5 , and not divisible 2 or 5 
integer = int(input("Enter a integer: \n"))
if integer%2 == 0 and integer%5 == 0:          #This will check if there are any remainders left from when the integer is divided in 2 and 5 and print out "Divisible by 2 and 5"
 print("Divisible by 2 and 5") 
elif integer%2 == 0 or integer%5 == 0:         #This will check if there are any remainders left from when the integer is divided in 2 or 5 and print out "Divisible by 2 or 5"
 print("Divisible by 2 or 5")
else:
 print("Not divisible by 2 or 5")                   #This will print out "Not divisible by 2 or 5" when the integer is not divisible by 2 or 5
