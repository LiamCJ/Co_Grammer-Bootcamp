#This program calculate and display the times table the user wishes to display
table = int(input("What times table do you want to display: "))   #This asks the user which time table they want to display
print("The "+str(table)+" times table is:")                     #This shows what time table is being displayed
for i in range(1,13):                                           #This loop will repeat in the range of 1 and 13 which is as follows:1,2,3,4,5,6,8,9,10,11,12.
  print(str(table)+ " x "+ str(i)+" = "+str(i*table))           #This will print each multiple of the number entered by the user
