#This program requests a user to enter their year of birth and determines there age in order to display if they are old enough for a party
DOB=int(input("Enter the year you were born: ")) #DOB stands for Date OF Birth and stores the users year of birth
age=2019-DOB                                     #age determine the users age by subtracting the users year of birth by 2019
if age>18: 
	print("Congrats you are old enough")
else:
	print("You are not old enough")               #I added a extra line in case the user is not old enough

