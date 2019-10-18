# This example program is meant to demonstrate errors.
 
# There are some errors in this program, try run the program by pressing F5.
# Now look at the error messages and find and fix the errors.

print("Welcome to the error program")                                                  #(Compilation Error)This line needed parenthesis in order to take place 
print("\n")                                                                                              #(Compilation Error)This line needed parenthesis in order to take place and the indent from here to line 14 would have also cause a error. This line is also unncessary since the \n can be put after program in the previous line 
ageStr = "24" #I'm 24 years old.                                                           #(Compilation Error)This had two equal signs which checks if a value are equal to each other instead it should have been one equal sign which would assign a value. The other error was adding 'years old' to the number(age) because when it is casted to a integer it would have not recognise the letters because they are not whole numbers
age = int(ageStr)                                                                     
print("I'm "+str(age)+" years old.")                                                       #(Compilation Error)here age needed to be casted as a string or instead print it out as ("I'm",age,"years old."). The spacing might cause a logical error because it would have been printed out as >>>I'm24yearsold
three = "3"                                                                            
answerYears = age + int(three)                                                            #(Compilation Error)the variable three needed to be casted to a integer in or for the numbers to be added
print("The total number of years:" + str(answerYears))                        #(Compilation Error)This line needed parenthesis in order to take place and the variable (answerYears) should not be put beentween quotation marks since it would have been recognised as a phrase not a variable
answerMonths = answerYears*12                                                         #(Logical Error & Runtime Error)answer is not a defined variable and instead it should be answerYears and after answerMonths is established the values should been increased by 6 in order for the user to find out how many months olds they would have been in 3 years and 6 months
answerMonths += 6                                                                      
print("In 3 years and 6 months, I'll be " +str(answerMonths)+ " months old")           #(Compilation Error)This line needed parenthesis in order to take place also here answerMonths needed to been casted as a string or instead print it out as ("In 3 years and 6 months, I'll be " , answerMonths , " months old").

#HINT, 330 months is the correct answer                                                

