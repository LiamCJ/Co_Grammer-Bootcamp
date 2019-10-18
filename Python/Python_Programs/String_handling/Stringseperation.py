#this program prints the words of a sentence that the user enters and prints them on seperated lines
sent = input("Enter the sentence: ")                  
words = sent.split()              #Each word of the sentence is put in the list words in order to retrieve them later
for word in words:               #This loop repeats for the amount of words in the sentence entered
  print(word)                        #Here each word is printed
