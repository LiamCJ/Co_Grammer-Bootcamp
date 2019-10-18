#This program displays how many lines,characters,words,and vowels are in a text
def Counting(filename):                                    #The function that counts how many lines,characters,words,and vowels are in a text
  x = open(filename,'r', encoding='utf-8-sig')
  all_lines = list()                                               #The list that contains all the lines of the .txt file 
  chars = 0
  words = 0
  vowelCount = 0
  vowels = set('AEIOUaeiou')                            #The variable (vowels) contains the characters " AEIOUaeiou " which are vowels in a set  

  for line in x:                                                   #The loop repeats for the amount of lines in the .txt file
    all_lines.append(line.split())                        #Appending the lines of the .txt file to (all_lines)
    chars += len(line)                                        #Counting the amount of characters of each line and adding them togther
    for char in line:                                           #The loop repeats for the number of charaters in the lines of the .txt file
      if char in vowels:                                      #If any of characters in the line are also in (vowels) they are vowels and the number of vowels are increased by 1
        vowelCount += 1

  for array in range(len(all_lines)):                  #The loop repeats for the amount of lines are in (all_line) where (array) is a line
    words += len(all_lines[array])                     #Here the amount of words in each line is being counted and added together

  print('Number of Lines =',len(all_lines))        #Displays the number lines of in the .txt file
  print('Number of Characters =',chars)           #Displays the number characters of in the .txt file
  print('Number of Words =',words)                 #Displays the number words of in the .txt file
  print('Number of Vowels =',vowelCount)      #Displays the number vowels of in the .txt file

  x.close()
  x.closed

Counting('input.txt')                                        #Displays the amount of lines,characters,words,and vowels are in a text
