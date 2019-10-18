#this program allows the user to remove any characters from a string the choose to enter
string = input("Enter your string: ").lower()                                                       
remove = input("What character(s) would you like to remove (Putting a space between unwanted characters will remove spaces) \n-> ").lower()   #Requesting the user to enter the character they wish to remove with an example of how they should enter them      
removelist = list()                                                                         
for char in remove:                                                 #Here the characters are added to a list 
  removelist.append(char)
for char in string:                                                    #This loop will continue for the length of the string entered
  if char in removelist:                                            #This line checks if the character in the string is the same as the ones of the remove list
    string = string.replace(char,"")                           #If the previous line is true the characters will be removed

print(string.capitalize())
