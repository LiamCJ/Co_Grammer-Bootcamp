#This program displays all the even numbers from 1 to 1000
for n in range(1,1001):         #The loop repeats for the range of 1 to 1000 where (n) is each number
  if n % 2 == 0:                #if a number is divided by 2 and there are no remainders the number is an even number
    print(n)                    #prints the even number