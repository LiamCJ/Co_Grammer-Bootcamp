#This program determines if a number is even or odd
integer=int(input("Enter a integer: "))
'''I used mod to determine if the integer is even or negeative i.e. if the value entered is divible by two with nothing is remaining it is a 
   even number else it is a odd number'''
if integer%2==0: 
 print("The integer is even")
else:
 print("The integer is odd")