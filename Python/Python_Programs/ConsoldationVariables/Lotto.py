#This program will generate a random 2 digit number for a lotto draw and based on the users number they will either recieve a prize or not
import random                                                           #This imports random in order to generate random numbers
lottery_number  = random.randint(10,99)                                    #This generates a 2 digit random number between 10 and 99
user_number = int(input("Enter a 2-digit number:\n"))                     #This stores the users 2 digit number
lottnum_1 = int(str(lottery_number)[0])                                   #This stores the first digit of the random generated number
lottnum_2 = int(str(lottery_number)[1])                                   #This stores the second digit of the random generated number
usernum_1 = int(str(user_number)[0])                                      #This stores the first digit of the number entered by the user
usernum_2 = int(str(user_number)[1])                                      #This stores the second digit of the number entered by the user
print("The lottery number is: "+str(lottery_number))                      #This displays the lotto number
if lottnum_1 == usernum_1 and lottnum_2 == usernum_2:                         #This checks if the users number is the same as the lotto number and if it is true, it outputs line 12
  print("Congratulations you have an exact match, you win R10 000.00") 
elif lottnum_1 == usernum_2 and lottnum_2 == usernum_1:                       #This checks if the users number has all the same digits as the lotto number and if is true, it outputs line 13
  print("Congratulations you have all digits, you win R5000.00")       
elif lottnum_1 == usernum_1 or lottnum_2 == usernum_2 or lottnum_1 == usernum_2 or lottnum_2 == usernum_1:  #This checks if either one digit of the 2 digit number of the users input is equal to either one digit of the random 2 digit number and if one is, it outputs line 15
  print("Congratulations you have one correct digit, you win R1 000.00")
else:                                                                     #This will output line 17 if the number or any digit is not the same
  print("Sorry no match")
