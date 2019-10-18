#This program displays the capital of a country entered that exists in the dictionary
countryMap = {'Japan': 'Tokyo','Italy': 'Rome','Thailand': 'Bangkok','Sweden': 'Stockholm','Canada': 'Ottawa'}
country = input('Japan\nItaly\nThailan\nSweden\nCanada\nWhat countries capital do you want to know? ').capitalize()
#I added more to the code so that is the user a country that is not in the dictionary, the program will display a response
if country in countryMap:                                      #If the country entered is in the dictionary [line 6] will take place
  print('The capital of %s is'%(country),countryMap[country])  #Displays the country entereds capital
else:                                                          #If [line 5] is not true [line 8] will take place
  print('Country and capital not found')                       #Displays that the country and its capital are not found
