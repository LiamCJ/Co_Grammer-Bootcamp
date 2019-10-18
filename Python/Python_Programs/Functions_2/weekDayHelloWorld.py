#This program displays the outputs for two different functions
#this function displays the days of the week
def weekdays():
  week = ('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday')   #The list holds the days of the week
  for day in week:                  #the loop repeats for the length of (week) where day is each day in (week)
    print(day)                      #Displays the day
#This function replaces every second word of a string with Hello 
def hello(string):                                               
  strList = string.split(" ")       #Splits each word in the string into an array in the list strList
  nWord = []                        #Empty list to hold new string
  for w in range(len(strList)):     #The loop repeats for the length of (strList) where (w) is the postion of each word
    if w % 2 == 0:                  #If the position of a word is divisible by 2 and there is a remainder, the word is in every first position but if not then the word is in every second position
      nWord.append(strList[w])      #does not change the original word since it is in every first position
    else:                           #
      nWord.append('Hello')         #word gets replaced by Hello since it is in every second position
  nStr = " ".join(nWord)            #The lists contents are joined to be displayed
  print(nStr)                       #

print('The weekdays are:')
weekdays()
uInt = input('Enter a string: ')
hello(uInt)