#This program displays the amount of each character occurs in a string in numerical order
string = input('Enter a string: ').upper()         
Character = list()
CharFreq = list()
CheckChar = ""                                                                   #This variable holds the characters that already had its frequency checked 
for char in string:                                                                #The loop will repeat for the number of characters in the (string)
  if CheckChar.find(char) == -1:                                           #This checks if the the character is in the variable (CheckChar) since if a character is not in a string its location is -1, If this line is True lines 9-11 will take place   
    CheckChar += char                                                         #This adds the character that will be counted to the (CheckChar) variable so that it and its frequency does not get added to the list multiple times
    Character.append(char)                                                  #This line appends each character to the list (Character)
    CharFreq.append(string.count(char))                              #This line appends the frequency of each character in the list (CharFreq) that is in the same order of the list that the characters are
  else:                                                                                  #If line 8 is False and the character all ready exists in (CheckChar) the program will continue the loop and move to the next character in the string
    continue

CharHolder = ""                                                                   #A place holder for the characters when putting their frequencies in decending order
FreqHolder = 0                                                                     #A place holder for when putting the characters' frequencies in decending order
for x in range(len(Character)):                                             #A loop that continues for the number of characters in the string where (x) is the position of the character
  for y in range(x):                                                                #A loop that continues for the range of characters position  where (y) is the integers in the range of (x) 
    if CharFreq[y] < CharFreq[y + 1]:                                     #If there is frequency that is higher than the first frequency lines 20-26 will take place
      FreqHolder = CharFreq[y + 1]                                        #[lines 20-22] swap the positions of the frequencies so that the highest frequency is first and the rest of the frequencies will follow in decending order
      CharFreq[y + 1] = CharFreq[y]
      CharFreq[y] = FreqHolder
      
      CharHolder = Character[y + 1]                                        #[lines 24-26] swap the positions characters, so that the character with the with the highest frequency is first and the rest of the characters will follow in the same order as their frequencies do 
      Character[y + 1] = Character[y]
      Character[y] = CharHolder

sentence = ""			
for i in range(len(Character)):                                               #A loop that continues for the range of the length of the number of characters in (string) where (i) is the position of each character
  if i != len(Character) -1:                                                       #If (i) is not the last character line 31 will take place  
    sentence += ("'%s': %s," %(Character[i],CharFreq[i]))         #This adds the characters (first character to the 2nd last character) and their frequencies in a key and value format to the string (sentence)
  else:                                                                                    #If (i) is the last character line 33 will take place
    sentence += ("'%s': %s" %(Character[i],CharFreq[i]))          #This  adds the last character and its frequency in a key and value format to the string (sentence)

print("{" + sentence + "}",end="")                                         #this prints out (sentence) in a dictionary format
 
