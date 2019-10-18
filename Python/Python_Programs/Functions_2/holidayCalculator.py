#This program displays the total cost of your holiday using the calculations of different functions
def hotelCst(night):                                       #This function calculates the amount of nights stayed at the hotel
  hotPrce = night * 150                                    #Price of one night is R150 where hotPrce means hotel price

  return hotPrce                                           #Returns the value of hotPrce

def planeCst(travel):                                      #The function that calculates the price of the plane ticket,Prices vary from R2500 - R7500 depending on the destination
  if travel == 'Johannesburg' or travel == 'Joburg':
    airPrce = 2500
  elif travel == 'Tokyo':
    airPrce = 5000
  else:
    airPrce = 7500

  return airPrce                                           #Returns the value of airPrce which is the price of the plane ticket

def carCst(rental):                                        #The function that calculates the price of the rental car 
  carPrce = rental * 100                                   #One day renting a car is R100 where CarPrce is the price of the car

  return carPrce                                           #Rerurns the value of carPrce
#[lines 23-25] require users to input the nessacary information to calculate the holiday price which is done at [line 26] and displayed on [line 27]
def holiCst():
  nights = int(input('How many nights are you staying at the hotel: '))
  city = input('Joburg/Johannesburg R2500 \nTokyo R5000\nOther R7500 \nWhat city are you flying to: ').capitalize()
  days = int(input('How many days are you renting the car: '))
  holiPrce = hotelCst(nights) + planeCst(city) + carCst(days)
  print('The total cost of your holiday is R%d'%(round(holiPrce,2)))

holiCst()
