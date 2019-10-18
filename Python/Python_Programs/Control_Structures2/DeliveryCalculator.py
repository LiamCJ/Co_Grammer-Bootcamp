#this program will determine the cost of a parcel based on the users choices
price_pack = float(input("What is the price of your package: \n")) #price_pack stands for price of pack 
distance = float(input("Enter the distance: \n"))
transport = input('Do you want your parcel to travel by Air or Freight: \n').lower()
insurance = input('Do you want full insurance : \n').lower()
gift = input('Is your parcel a gift: \n').lower()
priority = input('Do you want standard or priority delivery: \n').lower()
if transport=='air':
  price_pack += 0.36*distance
else:                        
  price_pack += 0.25*distance  #If the users choice of transport is  not air it will be freight and this calculates the price for that
if insurance=='yes':
  price_pack += 50
else:                  
  price_pack += 25             #If the user chooses not to take insurance this will calculate the price for no insurance
if gift=='yes':
  price_pack += 15
else:                  
  price_pack += 0              #If the user does not want the parcel to be a gift this will calculate the price for that
if priority=='priority':
  price_pack += 100
else:
  price_pack += 20             #If the user wants stantard delivery this will calculate the price for that
print('The final cost of the product will be R'+str(price_pack))
