#This program determines the strength of the users password based on a series of questions
passwrd = input("Enter a password: ")
haveLength = False
upCase = False
lowCase = False
haveNum = False
strength=0
 #I used lower() in order to put the users input in lowercase so the it is compatible with my code
haveLength=input("Does your password have 6 characters or more (Yes or No): ").lower()
upCase=input("Does your password have uppercase letters in it (Yes or No): ").lower()  
lowCase=input("Does your password have lowercase in it (Yes or No): ").lower()         
haveNum=input("Does your password have numbers in it (Yes or No): ").lower()  
#Here i used the variable strength which keeps count of a certian characteristic is met it will increase but if it is not it will remain the same so that my code is shorter instead of verifying if each characteristic is true or false         
if haveLength=='yes':                               #If the length of the password is 6 or more the strength of the password will increase by 1
 haveLength = not haveLength                                    
 strength+=1                                        
else:                                               #If line 14 is not true strength will remain 0                                   
 strength=strength                                  
if upCase=='yes':                                   #If their are capital letters in the password the strength will increase by 1 
 upCase = not upCase                                        
 strength+=1                                        
else:                                               #If line 19 is not true strength will remain the same based on line 14                                      
 strength=strength                                  
if lowCase=='yes':                                  #If their are lowercase letters in the password the strength will increase by 1
 lowCase = not lowCase                                        
 strength+=1                                        
else:                                               #If line 24 is not true strength will remain the same based on lines 14 & 19                                     
 strength=strength                                  
if haveNum=='yes':                                  #If their are numbers in the password the strength will increase by 1
 haveNum = not haveNum                                       
 strength+=1                                        
else:                                               #If line 29 is not true strength will remain the same based on lines 14,19,and 24                                  
 strength = strength                                  
if strength>=3:                                     #If the strength of the password is 3 or more the password is strong else it is not
  print("suitable password")
else:
  print("not a suitable password")
