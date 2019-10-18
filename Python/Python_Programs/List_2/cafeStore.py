#This program displays the worth of all the stock in a cafe by using a function to calculate the worth of the stock
def stockVal():
  menu = ['Tea','Coffee','Scone','Rusks']
  stock = {'Tea': 50,'Coffee': 50,'Scone': 100,'Rusks': 100}
  price = {'Tea': 6,'Coffee': 12,'Scone': 2,'Rusks': 2}
  totalVal = 0
  for item in stock:                                          #the loop repeats for the length of the stock where item is the key of each item
    itemVal = stock[item]*price[item]                         #Calculates the stock value of each item
    totalVal += itemVal                                       #Calculates the total stock
  print('The total stock worth in the cafe is R%f'%(round(totalVal,2)))

stockVal()
