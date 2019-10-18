#This program displays the names and birth words of people that are listed on a text file
def readwords(filename):                                                                  #The function that displays the first letter of the names and the surnames
  y = open(filename,'r', encoding = 'utf-8-sig')                                    #" encoding = 'utf-8-sig' " converts the encoding to utf-8 so that python understands what is on the .txt file 
  count = 1
  words = list()                                                                                   #The list that will contain all the words in the .txt file [The same applies for line 18]
  print("Name")                                                                                 #Displaying "Name"
  for line in y:                                                                                   #Appending all the words in the .txt file to (words)[The same applies for line 20]
    words.append(line.split(' '))
#Lines[10-12] Displaying The First Letter Of The names And The Surnames
  for array in range(len(words)):                                                        #for each (array) in (words) where each (array) is a different line from the .txt file[The same applie for line 23]
    print("\t%d." % (count),words[array][0][0],words[array][1])             #" "\t%d." % (count) " displays the index and " words[array][0][0] " displays the first letter of the name and " words[array][1] " displays the surname
    count += 1
  y.close()	
  y.closed

def readDates(filename):                                                                 #The function that displays the birthwords
  y = open(filename,'r', encoding='utf-8-sig')
  count = 1
  words = list()
  print("\nBirth Date")                                                                       #Displaying "Birth Date"
  for line in y:
    words.append(line.split(' '))
#Lines[23-25] Displaying The Birthdays		
  for array in range(len(words)):
    print("\t%d." % (count),words[array][2],words[array][3],words[array][4],end = "")    #" words[array][2] " displays the day ," words[array][3] " displays the month ,and " words[array][3] " displays the year
    count += 1
  y.close()
  y.closed

readwords("DOB.txt")                                                                     #Displays all first letters of the names with surnames
readDates("DOB.txt")                                                                     #Displays all birthdays
