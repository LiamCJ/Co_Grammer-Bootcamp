#This program requires a user to enter a name and once they type the correct name it will display all the incorrect names
#The other part of the program which is part of the optional task allows the user to set a limit to how many times they can geuss the name
InNm = []                                                           #(InNm) is Input Name
tries = int(input('Enter the amount of times you want to try: '))
name = input('Enter a name: ').capitalize()
tryCount = 1                                                        #(tryCount) is the counter for how many times the user tries a name

while name != 'John' and tryCount != tries:                         #The loop will continue until the name entered is John or until the user reaches the amount of tries they for themselves
  InNm.append(name)                                                 #adds the name entered to list but only if the name is not John
  name = input('Enter a name: ').capitalize()
  tryCount += 1
  
if name != 'John':
  InNm.append(name)

print('Incorrect names: ' ,InNm)
