#This program checks if the word entered by the user is a palindrome or not
word = input("Enter the word you wish check: ").lower()              
reverse = word[::-1]                            #This line reverses the word the user enters 
if word == reverse:                             #here the reversed word is checked with the word entered if they are equal
  print(word,"is a palindrome")           #If the previous line is true, the word is a palindrome and this line is printed
else:                                                      
  print(word,"is not a palindrome")     #If line 5 is false, the word is not a palindrome and this line is printed
