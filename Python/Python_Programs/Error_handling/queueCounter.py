#This program will tell people who is next to be served in a bakery,how many people have been served and the average amount of people served
people_left = True
counter = 0
serving = 1
while people_left is True:
  print("We are now serving number ", serving)
  serving += 2                                                                            #The logical error lies here since it will skip all the even numbers by adding 2 to the serving number after each input instead of 1
  counter=counter                                                                     #The other logical error lies here because all this line is doing, is making counter equal its original value instead of adding one each time.This line will also be the cause of the runtime error
  people_left=input("Are there still people left in the line (Yes or No): ").lower()      
  if people_left == 'yes':
    people_left = True
  else:
    people_left = False
average = serving/counter                                                               #This is where the runtime error is because the variable serving is being divided by zero
print("The amount of people served is ",counter," and the average number of people servered is ",average)

