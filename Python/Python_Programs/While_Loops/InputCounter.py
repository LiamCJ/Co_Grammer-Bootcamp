#This program will display the average of the numbers they entered but if they wish it will not be displayed, the loop will also not occur if the correct name is not entered
try_count = 0                                                                      #This is to count how many times the user tries to type the hidden name
counter = 0                                                                        #this counts how many numbers are entered
sumnum = 0                                                                         #this holds the sum of the numbers entered
num = int(input("Please Enter A Number [IF YOU WISH TO STOP ENTER -1 AND RECIEVE A AVERAGE OR ENTER -2 IF YOU DO NOT WANT TO RECIEVE A AVERAGE]:\n")) #If the user enters -1 the loop will stop and the average of the numbers entered will be displayed but the average will not be displayed if -2 is entered but the loop will still stop 
name = input("Please enter your name: ").capitalize()                              #I used capitalize so that the first letter is capitalized and if the correct name is entered it will match the hidden name no mattter what case the user puts it in
try_count += 1                            
while num != -1 and num != -2:                                                         #while the numbers entered by the user is not -1 or -2 this loop will take place
  while not name == 'Rakim':                                                         #While the name entered by user is not correct this loop will occur
    name = input("Please enter your name: ").capitalize()                          
    try_count += 1                                                                 
  sumnum += num                                                                    
  num = int(input("Please Enter A Number [IF YOU WISH TO STOP ENTER -1 AND RECIEVE A AVERAGE OR ENTER -2 IF YOU DO NOT WANT TO RECIEVE A AVERAGE]:\n"))     
  counter += 1                                                                     

print("You attempted "+str(try_count)+" time(s) to enter the correct name")        #This prints out how many times the user tried to enter the correct name
average=round(sumnum/counter,2)                                                    #this holds the average of the numbers entered
if num != -2:                                                                      #If the user enters -2 instead of -1 the average will not be displayed 
  print("The average is: "+str(average))                                        
