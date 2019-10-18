#This program requires the user to enter two numbers and allows the user to either add,subtract,multiply or divide the two numbers using functions

def addN(n1,n2):      #add function
  add = n1 + n2
  return add          #returns the value of the added numbers

def subN(n1,n2):      #subtract function
  sub = n1 - n2
  return sub          #returns the value of the subtracted numbers

def mulN(n1,n2):      #multiply function
  mul = n1 * n2
  return mul          #returns the value of the multiplied numbers

def divN(n1,n2):      #divide function
  div = n1 / n2
  return div          #returns the value of the divided numbers
#[lines 20-22]Reqiure the user to enter the numbers and choose what they want to do [lines 23-30] displays the results of the numbers entered and the option chosen
def opt():
  num1 = int(input('Enter a number: '))
  num2 = int(input('Enter a number: '))
  option = input('Option 1 - add \nOption 2 - subtract \nOption 3 - multiply \nOption 4 - divide \nWhat would you like to do [Enter from Option 1,2,3,4]: ')
  if option == '1':
    print('The sum of %d and %d is'%(num1,num2),addN(num1,num2))
  elif option == '2':
    print('The difference of %d and %d is'%(num1,num2),subN(num1,num2))
  elif option == '3':
    print('The product of %d and %d is'%(num1,num2),mulN(num1,num2))
  else:
    print('The dividence of %d and %d is'%(num1,num2),divN(num1,num2))
opt()