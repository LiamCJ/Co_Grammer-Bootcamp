#This program helps the user choose their clothes for them based on a series of questions
temp = False
day_of_week = False
sun = False
temp = int(input("What is the temperature today: ")) 
day_of_week = input("Is it a weekday: ").lower()               #I used the lower function again so that it is compatible with my code too
sun = input("Is it Sunny today: ").lower()
if temp>20:                                                    #If the temperature is greater than 20 degrees the top output will be line 10
  temp = True
  top = 'Short sleeved shirt'
else:                                                          #If line 8 is not true the top output will be line 12
  top = 'Long sleeved shirt'
if day_of_week=='yes':                                         #If it is a weekday the pants output will be line 15
  day_of_week = True
  pants = 'Jeans'
else:                                                          #if line 13 is not true the pants output will be line 17
  pants = 'Shorts'
if sun=='yes':                                                 #If the day is sunny the accessories output will be line 20
  sun = True
  accessories = 'Cap'
else:                                                          #If line 18 is not true the accessories output will be line 22 
  accessories = 'Raincoat'
print("You will be wearing a "+top+" with a "+pants+" and a "+accessories)
