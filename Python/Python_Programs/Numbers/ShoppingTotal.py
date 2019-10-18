#This program calculates and displays the total and average of the price of three products entered by the user
prod1 = input("Please enter a name of a product 1: ")                                            #prod1 stands for product 1 
prod1price = round(float(input("Please enter the price of "+prod1+": ")),2 )                    #prod1price stands for product 1 price and holds the rounded float of the input to two decimal places 
prod2 = input("Please enter a name of a product 2: ")                                            #prod2 stands for product 2                                          
prod2price = round(float(input("Please enter the price of "+prod2+": ")),2)                     #prod2price stands for product 2 price and holds the rounded float of the input to two decimal places
prod3 = input("Please enter a name of a product 3: ")                                            #prod3 stands for product 3                                           
prod3price = round(float(input("Please enter the price of "+prod3+": ")),2)                     #prod3price stands for product 3 price and holds the rounded float of the input to two decimal places
prodtotal = round(prod1price+prod2price+prod3price,2)                                           #prodtotal stands for product price total which value is round to 2 decimal places
averageprodprice = round(prodtotal/3,2)                                                         #averageprodprice stands for average product price and stores the average price 
print("The total of "+prod1+","+prod2+","+prod3+" is R"+str(prodtotal)+" and the average price of the items are R"+str(averageprodprice))
