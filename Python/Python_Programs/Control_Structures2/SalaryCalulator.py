#This program will determine the salary of a person based on their position in the work place
title = input('Are you a salesperson or a manager: \n')                            #This will ask the user for their title [salesperson or manager
if title=='salesperson':                                                           #This calculates the salesperson salary
  SalesGrossSales = float(input('What is your gross sales for the month: \n'))*0.8
  SalesWage = SalesGrossSales+2000
  print("Your monthly wage is R"+str(SalesWage))
else:                                                                              #This calculates the managers salary
  ManagerHours = float(input('How many hours have you worked for the month: \n'))
  ManagerWage = ManagerHours*40
  print("Your monthly wage is R"+str(ManagerWage))
