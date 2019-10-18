#This program will calculate the average of the ages in a group of people
no_of_people=int(input("Enter the amount of people in the group: "))
sum_of_age=0
for i in range(1,no_of_people+1):                                                  #This loop will continue for the range of 1 to the amount of people the user enters 
  age=int(input("Enter the age of someone in the group: "))
  sum_of_age+=age
average_age=sum_of_age%no_of_people                                   #This line causes the logical error because it should be average_age=sum_of_age/no_of_people or for a integer divide average_age=sum_of_age//no_of_people
print("The average age of people in the group is "+str(average_age))
