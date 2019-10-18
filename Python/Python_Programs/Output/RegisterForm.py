#This program add the ID numbers of students that have registered to a .txt file
file = open('RegForm.txt', 'a')                                               #Opening the file so that the program can append ID numbers to the .txt file
student = int(input('How many students are registering: '))
for i in range(1,student+1):                                                  #The loop will repeat for the amount of students are registering                     
  id_number = input('Enter the students ID Number: ')         #The loop will repeat for the amount of students registering
  file.write(id_number + "\n")                                              #Writes the ID Number in the .txt file

file.close()
file.closed
