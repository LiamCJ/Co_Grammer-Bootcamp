#This programs shows an example how a string without number or contains words will cause a ValueError
favRest = input("Enter your favourite restaurant: ")
intFav = int(input("Enter your favourite number: "))
print("Your favourite restaurant is "+favRest)
print("Your favourite number is "+str(intFav))
print(int(favRest))                                    #A ValueError occurs due to favRest's value being a string and not a integer
