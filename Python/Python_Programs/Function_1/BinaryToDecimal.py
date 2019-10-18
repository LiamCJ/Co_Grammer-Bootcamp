#This program converts a user binary code into decimal code
uInt = list(input('Enter a binary number: '))           #uInt is user input, the code entered by the user is split into a list so the digits are easier to manipulate for the calculation
deci = 0
for dig in uInt:                            #The loop will repeat for the length of the (uInt) where (dig) is each digit
  deci = deci*2 + int(dig)                     #A calculation used to tranfer binary to decimal code
binry = ''.join(uInt)                                   #The list of digits the user entered being joined to be displays properly
print('The dicimal code of %s is'%(binry),deci)

