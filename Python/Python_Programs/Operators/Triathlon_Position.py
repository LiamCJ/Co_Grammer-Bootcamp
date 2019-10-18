#Based on the time the user takes to complete a triathlon and their position the program will display a certian message
swimming = float(input("What was your time taken for swimming in minutes: "))
cycling = float(input("What was your time taken for cycling in minutes: "))
running = float(input("What was your time taken for running in minutes: "))
position = int(input("First=1 \nSecond=2 \nThird=3 or \nFourth=4 \nWhat was your position: "))
time_taken = swimming+cycling+position
if time_taken <= 100 and position == 1:                                     #This will print out "Provincial Colours" when the time taken of the user is less or equal to 100 minutes and their position is first
  print("Provincial Colours")                                          
elif time_taken > 100 and time_taken <= 110 and position == 2 or position == 1: This will print out "Provincial Half Colours" when the time taken of the user is less than or equal to 110 minutes but more than 100 minutes and they placed first or second
  print("Provincial Half Colours")                                      
elif time_taken > 110 and time_taken <= 115:                                #This will print out "Provincial Scroll" when the time taken of the user is less than or equal to 115 minutes but more than 110 minutes 
  print("Provincial Scroll")                                           
elif time_taken > 115 and time_taken <= 120:                                #This will print out "Provincial Certificate" when the time taken of the user is less than or equal to 120 minutes but more than 115 minutes 
  print("Provincial Certificate")                                      
else:                                                                                                   #This will print out "no award' when the time taken is greater than 120 minutes
  print('no award')                                                    

