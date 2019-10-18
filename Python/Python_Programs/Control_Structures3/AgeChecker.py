#This program will display a certian message based on the users age
age = int(input("How old are you: \n")) #age is a variable that stores the users age
if age >= 18:
  print("You are old enough!")          #This prints out if the user is 18 or older
elif age >= 16 and age < 18:
  print("Almost There")                    #This prints out if the user is 16 or older but younger than 18
else:
  print("You're just too young!")      #This prints out if the user is younger than 16 
