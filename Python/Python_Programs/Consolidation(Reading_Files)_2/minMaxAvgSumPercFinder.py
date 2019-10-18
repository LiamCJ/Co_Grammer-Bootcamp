#This program
inputF = open('input.txt','r',encoding = 'utf-8-sig')        #(inputF) openining the .txt file to be read
output = open('output.txt','w',encoding = 'utf-8-sig')       #(output) openining the .txt file to be written on
contlist = list()                                            #empty list to add input.txt's contents to 
for i in inputF:                                             #The loop will continue for each line in the file
  contlist.append(i.split(':'))                              #Adding each line to the list
#In [lines 7-14] list() assigns the arrays when split into their respective new lists, map(int,) casts each array in the new list from a string to integer
minlist = list(map(int,contlist[0][1].split(',')))           #contlist[0][1] is [1,2,3,4,5,6] from the 1st line in input.txt
maxlist = list(map(int,contlist[1][1].split(',')))           #contlist[1][1] is [1,2,3,4,5,6] from the 2nd line in input.txt
avglist = list(map(int,contlist[2][1].split(',')))           #contlist[2][1] is [1,2,3,4,5,6] from the 3rd line in input.txt
p90List = list(map(int,contlist[3][1].split(',')))           #contlist[3][1] is [1,2,3,4,5,6,7,8,9,10] from the 3rd line in input.txt
sumlist = list(map(int,contlist[4][1].split(',')))           #contlist[4][1] is [1,2,3,5,6] from the 4th line in input.txt
min2list = list(map(int,contlist[5][1].split(',')))          #contlist[5][1] is [1,5,6,14,24] from the 5th line in input.txt
max2list = list(map(int,contlist[6][1].split(',')))          #contlist[6][1] is [2,3,9] from the 6th line in input.txt
p70List = list(map(int,contlist[7][1].split(',')))           #contlist[7][1] is [1,2,3] from the 7th line in input.txt

avg = 0
sum1 = 0
for n in range(len(avglist)):                                #The loop repeats for the length of (avglist) where (n)is each array in the list
  avg += avglist[n]/len(avglist)                             #This line calculates the average of the numbers in the list
for n in range(len(sumlist)):                                #The loop repeats for the length of (sumlist) where (n)is each array in the list
  sum1 += sumlist[n]                                         #This line calculates the sum of the numbers in the list
p90 = (90/100)*(len(p90List))                                #This line calculates the 90th percentile of (p90List)
p70 = (70/100)*(len(p70List))                                #This line calculates the 70th percentile of (p70List)
min1 = min(minlist)                                          #This line finds the smallest number in (minlist) using the min() function
max1 = max(maxlist)                                          #This line finds the largest number in (maxlist) using the max() function 
min2 = min(min2list)                                         #This line does the same as line 24 for (min2list)
max2 = max(max2list)                                         #This line does the same as line 24 for (max2list) 

output.write('The min of ' + str(minlist) + ' is ' + str(min1) + '\n')
output.write('The max of ' + str(maxlist) + ' is ' + str(max1) + '\n')
output.write('The avg of ' + str(avglist) + ' is '+str(round(avg,2)) +'\n')
output.write('The 90th percentile of ' + str(p90List) + ' is ' + str(int(p90)) + '\n')
output.write('The sum of ' + str(sumlist) + ' is ' + str(sum1) + '\n')
output.write('The min of ' + str(min2list) + ' is ' + str(min2) + '\n')
output.write('The max of ' + str(max2list) + ' is ' + str(max2) + '\n')
output.write('The 70th percentile of ' + str(p70List) + ' is ' + str(int(p70)) + '\n')

inputF.close()
output.close()
inputF.closed
output.closed