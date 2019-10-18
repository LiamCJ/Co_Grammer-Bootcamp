#This program diplays the meaning an abbreviation the user enters or displays 'Abbreviation not found' if the user enters an abbreviation not in the dictionary
abbr = {'ADSL': 'Asymmetric Digital Subscriber Line','GOAT': 'Greatest Of All Time','ETA':'Estimated Time of Arrival','CEO':'Chief Executive Officer','MIA':'Missing In Action','AI':'Artifical Intelligence'}
#The two extra abbreviations are MIA and AI
uInt = input('Enter an abbreviation: ').upper()  #uInt is user Input
#[Lines 5-16] check if the entered abbreviation is in the dictionary is so its meaning will be printed, if not [line 19] will take place
if uInt == 'ADSL':
  print('ADSL stands for',abbr['ADSL'])
elif uInt == 'GOAT':
  print('GOAT stands for',abbr['GOAT'])
elif uInt == 'ETA':
  print('ETA stands for',abbr['ETA'])
elif uInt == 'CEO':
  print('CEO stands for',abbr['CEO'])
elif uInt == 'MIA':
  print('MIA stands for',abbr['MIA'])
elif uInt == 'AI':
  print('AI stands for',abbr['AI'])
else:
  print('Abbreviation not found')
