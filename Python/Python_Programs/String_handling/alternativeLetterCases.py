#Thsi program displays the string entered by the user with each alternate character an uppercase character and each other alternate character a lowercase character.
string = input('Enter a string: ')
new_word = ""                                        #This is the variable where the new string is stored 
i = True                                                   #(i) is a place holder for True and False when the if statement is used
for char in string:                                    #For each character in the string this loop will continue 
  if i:                                                        #If (i) is True the letter will be capitalized and placed in new word  
    new_word += char.upper()
  else:                                                     #If (i) is False the letter will be made lowercase and placed in new word
    new_word += char.lower()
  i = not i                                                #This line makes (i) false in order to make each other alternate character a lowercase character
print('ThE NeW WoRd iS:',new_word)
