#This program write the mininum of one list, the maximum of another and the average of another in a .txt file to another .txt
inputF = open('input.txt','r',encoding = 'utf-8-sig')       #(inputF) openining the .txt file to be read
output = open('output.txt','w',encoding = 'utf-8-sig')      #(output) openining the .txt file to be written on
contlist = list()                                           #empty list to add input.txt's contents to 
for i in inputF:                                            #The loop will continue for each line in the file
  contlist.append(i.split(':'))                             #Adding each line to the list
#In [lines 8-10] list() assigns the arrays when split into their respective new lists, map(int,) casts each array in the new list from a string to integer
minlist = list(map(int,contlist[0][1].split(',')))          #contlist[0][1] is 1,2,3,4,5,6 from the 1st line in input.txt
maxlist = list(map(int,contlist[1][1].split(',')))          #contlist[1][1] is 1,2,3,4,5,6 from the 2nd line in input.txt
avglist = list(map(int,contlist[2][1].split(',')))          #contlist[2][1] is 1,2,3,4,5,6 from the 3rd line in input.txt

avg = 0
for n in range(len(avglist)):                               #The loop repeats for the length of (avglist) where (n)is each array in the list
  avg += avglist[n]/len(avglist)                            #This line calculates the average of the numbers in the list
minn = min(minlist)                                         #This line finds the smallest number in (minlist) using the min() function
maxx = max(maxlist)                                         #This line finds the largest number in (maxlist) using the max() function 
#[lines 18-20] write the information to output.txt
output.write('The min of ' + str(minlist) + ' is ' + str(minn) + '\n')
output.write('The max of ' + str(maxlist) + ' is ' + str(maxx) + '\n')
output.write('The avg of ' + str(avglist) + ' is '+str(round(avg,2)))

inputF.close()
output.close()
inputF.closed
output.closed