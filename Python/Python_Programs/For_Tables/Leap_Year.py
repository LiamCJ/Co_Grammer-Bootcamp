#This program will determine if the year and they amount of years the user enters are leap years or not
start_year = int(input("What year do you want to start with?\n"))  #start_year will store the year the user wants to start with
no_years = int(input("How many years do you want to check?\n"))    #no_years will store the amount of years the user wants to check
counter = 0                                                        
for i in range(1,no_years+1):                                    #this is a loop for the range of 1 and the number of years the user entered
  years = start_year+counter                                       #This will add 1 year to the year to the the year the user entered and will keep increasing by 1 until loop is complete
  counter += 1                                                     
  if years%4 == 0 and years%100 != 0 or years%400 == 0:          #This will check if a year is a leap year or not because a leap year is every 4 years, but not every 100 years, then again every 400 years                                             
    print(str(years)+" is a leap year")                          #This will print out along with the year that is a leap year if the year is a leap year
  else:                                                          
    print(str(years)+" isn’t a leap year")                       #This will print out along with the year that is a year if the year is not a leap year
