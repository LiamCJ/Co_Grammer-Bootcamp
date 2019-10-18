#this program will determine if a number less than 100 is even or odd and if it is even it will be multiplied by 2 but if it is odd it will be multiplied by 3
number = int(input("Enter number less than 100: "))
while number >= 100:                                                    #This loop will repeat as long as the user enters a number greater than 100
  print ("Please try again")
  number = int(input("Enter number less than 100: "))
if number%2 == 0:                                                          #This line checks if the number entered is even or not,if it is even line 7 will occur but if it is odd line 9 will occur
  print (number*2)                                                           #Displays the number entered by the user multiplied by 2 
else:
  print (number*3)                                                           #Displays the number entered by the user multiplied by 3
