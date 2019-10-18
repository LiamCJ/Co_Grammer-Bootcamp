#This program will determine the users bmi and based on that, display a certian message
weight = float(input("What is your weight in kg : \n"))   #This stores the users weight in the variable weight
height = float(input("What is your height in m : \n"))    #This stores the users height in the variable height
BMI = weight/height**2                                                #This stores the users BMI in the variable BMI
if BMI >= 30:
  print("You are obese")                                                   #This prints out "You are obese" when the BMI is 30 or more
elif BMI >= 25 and BMI < 30:                                    
  print("You are overweight")                                      #This prints out "You are overweight" when the BMI is 25 or more but equal to 30
elif BMI >= 18.5 and BMI < 25:                                 
  print("You are normal")                                            #This prints out "You are normal" when the BMI is 18.5 or more but less than 25
else:                                                        
  print("You are underweight")                                       #This prints out "You are underweight" when the BMI is less than 18.5