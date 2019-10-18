#The code produces the TriTable required by using nested loops.

for num in range(1,10):           #This line makes sure that it prints out the multiples of 1 to 9 and where each number is the value of (num)
  for i in range(1,num+1):       #This line repeats for the ranges [(1,2) which produces number 1,(1,3)which produces numbers 1 and 2,(1,4),the other ranges are (1,5),(1,6),(1,7),(1,8),(1,9),(1,10)] where the numbers between the ranges are the values of (i)
    print(num*i,end="   ")        #This line multiplies the number (num) with the numbers in (num)s range which is (i) e.g. when num=2 the numbers in the range are 1 and 2 and it will print (2*1) then (2*2) since the range of (1,3) is 1 and 2 where the range of (1,4) is 1,2 and 3. the 'end' parameter is in order for the program to know to end each number with a space
  print("")                               #This line starts a new line for the next multiples to be printed on
