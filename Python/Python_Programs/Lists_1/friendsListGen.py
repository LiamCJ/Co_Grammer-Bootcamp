#This program displays the first and last names of a list of friends and the length of the list of friends, the program also stores the age of each friend in the list of friends in a corresponding manner to another list
friends_names = ['Eminem','Rakim','Royce']
print(friends_names[0],'\n' + friends_names[-1],'\n'+'The length of the friend list is' , str(len(friends_names)))   #printing the first and last names of the friend list, then the length of the list

friends_ages = []
for i in friends_names:                                                           #The loop repeats for each array in the friend list where (i) is each name
  friends_ages.append(int(input("Enter " + i+"'s age: ")))                        #This lines reqiures the user to enter the age of a friend and then adds the age to the list (friends_ages)
