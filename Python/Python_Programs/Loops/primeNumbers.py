#This program will check if a number is a prime number or not
num=int(input("Enter a number: "))
if num > 1:
  for i in range(2,num):                             #This loop will check the numbers between 1 and the number entered for any factors of the number entered
    if num % i == 0:                                    #This line will check if is there are any remainders when the number is divided by a number between 1 and itself.If this is true the number is a factor of the number entered will not be a prime number
      print(num,"is not a prime number")        #If the previous line requirements are met this will be displayed
      print(i,"times",num//i,"is",num)          #[I put this line in order to show the user why the number is not a prime number]This line will display the factor other than 1 and the number itself which would make it not a prime number
      break                                                 #This will break the loop when the requirements are met for a number that is not a prime number
  else:                                         
     print(num,"is a prime number")          #if none of the requirements are met above the number will automatically be a prime number
else:                                           
  print(num,"is not a prime number")       #if a number is less than or equal to 1 it is not prime
