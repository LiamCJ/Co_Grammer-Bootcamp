#This program displays your top 5 movies
f_movies = ['8 Mile','The Art Of Rap','Bodied','Word Is Bond','SuperBad']  #f_movies is favourite movies
for count, item in enumerate(f_movies,1):                                  #the loop repeats for the length of the list (f_movies) where count is the index of the movie and item is the name of the movie, the enumerate starts counting at one
  print('Movie',str(count) + ':', item)
