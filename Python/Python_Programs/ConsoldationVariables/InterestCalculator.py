#This program will display the interest of an investment based of theit choice of simple or compound interest
import math                                                                #Here as instructed i imported math in order to use the function math.pow 
P = float(input("What is the amount that you are depositing: "))             
i = float(input("What is the interest rate as a percentage value: "))        
t = float(input("What is the number of years of the investment: "))          
interest = input("Do you want 'simple' or 'compound' interest: ").lower()    
r = round(i/100,2)                                                           #r is the variable that stores  the percentage divided by 100                                                             
if interest == 'simple':                                                     
  A=P*(1+r*t)                                                              #This is the equation to calculate simple interest
  print("The answer is: R"+str(A))                                         #This is printing out the simple interest
else:                                                                     
  A=round(P* math.pow((1+r),t),2)                                          #This is the equation to calculate compund interest
  print("The answer is: R"+str(A))                                         #This is printing out the compound interest 
