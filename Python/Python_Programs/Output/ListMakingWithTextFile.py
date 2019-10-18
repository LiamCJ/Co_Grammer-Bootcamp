#This program 
num1 = open('numbers1.txt','r',encoding='utf-8-sig')
num1cont = num1.read()                                  #Assigning the contents of 'numbers1.txt' to the variable (num1cont)
num1.close()
num1.closed

num2 = open('numbers2.txt','r',encoding='utf-8-sig')
num2cont = num2.read()                                  #Assigning the contents of 'numbers2.txt' to the variable (num2cont)
num2.close()
num2.closed


num = open('allNumbers.txt','w',encoding='utf-8-sig')
digits = num1cont.split()                               #Putting the contents of 'numbers1.txt' in a list (digits)
digits2 = num2cont.split()                             #Putting the contents of 'numbers2.txt' in a list (digits2)
for i in range(len(digits2)):                           #The loop repeats for the amount of numbers are in the list (digits2) where (i) is the position of each number in the list
  digits.append(digits2[i])                             #Putting the contents of (digits2) inside of (digits)
	
digHold = 0                                                 #A place holder for the numbers while sorting them
for i in range(len(digits)):                            #The loop repeats for the amount of numbers are in (digits) where (i) is the postion of each number
  for x in range(i):                                        #The loop repeats for the range of (i)
    if int(digits[x]) > int(digits[x + 1]):             #Lines[22-25] Sort the numbers in the list into ascending order. int() is used on the arrays so that the program can compare two arrays since they are originally strings
      digHold = digits[x]
      digits[x] = digits[x + 1]
      digits[x + 1] = digHold

for nums in digits:                                        #The loop repeats for the amount of numbers in (digits) where (nums) is each number
  num.write(nums + '\n')                               #Here the numbers are being written to the file in ascending order

num.close()
num.closed
