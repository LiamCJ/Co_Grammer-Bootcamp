#************* HELP *****************
#REMEMBER THAT IF YOU NEED SUPPORT ON ANY ASPECT OF YOUR COURSE SIMPLY LOG IN TO www.hyperiondev.com/support TO: 
#START A CHAT WITH YOUR MENTOR, SCHEDULE A CALL OR GET SUPPORT OVER EMAIL.
#************************************* 


# *** IF YOU DID NOT INSTALL NOTEPAD++ AND PYTHON (VERSION 2.7.3 or 2.7.5) ***
# *** PLEASE STOP READING THIS NOW, OPEN THE INSTALLERS FOLDER IN THIS DIRECTORY, 
#     RUN BOTH FILES TO INSTALL NOTEPAD++ AND PYTHON. ***
# PLEASE ENSURE YOU OPEN THIS FILE IN NOTEPAD++ OR IDLE otherwise you will not be able to read it.

# *** NOTE ON COMMENTS ***
# This is a comment in Python. 
# Comments can be placed anywhere in Python code and the computer ignores them - they are intended to be read by humans. 
# Any line with a # in front of it is a comment.
# Please read all the comments in this example file and all others.


# ========= Operators ===========
# Operators are symbols that tell the computer which mathematical calculations to perform or which comparisons to make.


# ========= Comparison Operators ===========
# As a programmer, it's important to not forget the basic logical commands.
# We can check if values or values stored in variables are equal to, less than, greater than, or not equal to one another.
# These work well with if statements to control what goes on in our programs.

# The four basic comparative operators are:
# greater than      >
# less than         <
# equal to          ==
# not equal         !


# We can combine the greater than, less than and not operator with the equals operator and form three new operations:
# greater than or equals to     >=
# less than or equals to        <=
# not equals to                 != 

# A tip to remember it is to word out the condition. Say the condition out loud if you need to
# and it will naturally come to you through practice.


# ************ Example 1 ************
# Comparing Numbers

print ("Example 1: ")

num1 = 10
num2 = 20

if num1 >= num2:        # 'greater than or equal to' 
       print ("It's not possible that 10 is bigger than or equal to 20.")
elif num1 <= num2:      # 'less than or equal to'
       print ("10 is less than or equal to 20." )
elif num1 != num2:      # 'not equal to'
       print ("This is also true since 10 isn't equal to 20, but the elif statement before comes first and is true so Python will execute that!")
elif num1==num2 :       # 'equal'
       print ("Will never execute this print statement...")


# Explanation:
# The program will check the first part of the if statement (is num 1 bigger than or equal to num 2?).
# If it is not, then it goes into the first 'elif' statement and checks if num1 is less than or equal to num2.
# If it is not then it goes into the next 'elif' statement...etc.


# ************ Example 2 ************
# Comparing Strings

print ("Example 2: ")
myName = "Tom"

if myName == "Tom":
       print ("Hey tom!")


# ========= Logical Operators  ===========
# Logical operators are another type of operator that is used to control the flow of a program.
# They are usually found as part of a control statement such as an if statement.
# Logical operators basically allow a program to make a decision based on multiple conditions.
# For example, if you would like to test more than one condition in an if statement.

# The three logical operations are:
# and   -  both conditions need to be true for the whole statement to be true (also called the conjunction operation)
# or    -  at least one condition needs to be true for the whole statement to be true (also called the disjunction operation)
# not   -  the statement is true if the condition is false (only requires one condition) 

# The 'and' and 'or' operators require two operands, while the 'not' operator requires one.


# ************ Example 3 ************
# Let's look at a real world examples:

# If there are eggs and there is enough money to buy eggs, then you can buy eggs. Otherwise you can't.
# This is an example of a conjunction operation where both conditions need to be true for the whole statement to be true.
# This is called the 'and' operation.

# If your friends are at the cinema or if the hot-dogs are among the best at the cinema, then you will go to the cinema, otherwise you won't.
# This is a disjunction operation where at least one of the conditions need to be met for the whole statement to be true.
# This is also called the 'or' operation.


# ************ Example 4 ************
# Example of an 'and' condition:

print ("Example 4: ")
myName = "Tom"
myFavouriteColour = "orange"

if myName == "Tom" and myFavouriteColour == "orange": 
        print ("Your name is Tom and your favourite colour is orange.")
else:
        print ("Your name isn't Tom or your favourite colour isn't orange.")


# Explanation:
# If myName is Tom and myFavouriteColour is orange, then the if statement's print statement will execute.
# Both conditions need to be met otherwise the else statement and its' print statement will execute.


# ************ Example 5 ************
#Example of an 'or' condition:       

print ("Example 5: ")
item = "chair"

if item == "dog" or len(item) == 5:
       print ("Either item is a dog, or the len of your item is 5.")

# Explanation:
# If item is dog or the length of item is 5, the print statement will execute
# At least one of the conditions need to be met otherwise print statement will not execute.


# ************ Example 6 ************
#Example of a 'not' condition:

print ("Example 6: ")
hasTrafficFines = False

if not hasTrafficFines:
    print ("You are a good driver.")

# Explanation:
# If hasTrafficFines is false the print statement will execute
# By adding the not operator, the hasTrafficFines variable is interpreted as being true when it is actually false 



# ************ Example 7 ************
print ("Example 7: ")

if item == "dog" or len(item) == 5:                 #Branch 1
        print ("Either item is a dog, or the len of your item is 5.")
elif item =="chair" and len(item) == 5:             #Branch 2
       print ("Your item is both a chair and len of item is 5.")
        
# When you run the above code, what will be the output? Run this program and find out!
# Remember only one branch of the if statement will execute, even if multiple branch conditions are 'true'.


# ========= Arithmetic Operators ===========

# The arithmetic operators in Python are as follows:
# + (Addition)          -       Adds values on either side of the operator
# - (Subtraction)       -       Subtracts the value on the right of the operator from the value on the left
# * (Multiplication)    -       Multiplies values on either side of the operator
# / (Division)          -       Divides the value on the left of the operator by the value on the right
# % (Modulus)           -       Divides the value on the left of the operator by the value on the right and returns the remainder
# ** (Exponent)         -       Performs exponential calculation



# ****************** END OF EXAMPLE CODE ********************* # 


# == Make sure you have read and understood all of the code in this Python file.
# == Please complete the compulsory task below to proceed to the next task ===
# == Ensure you complete your work in this folder so that one of our tutors can easily locate and mark it ===



# ================= Compulsory Task  ==================
# Create a new Python file in this folder called “Colours.py.” 
# Design a program that reads in the times in minutes for three disciplines of a triathlon, namely
# swimming, cycling and running as well as the total qualifying time for all three events.
# The program must calculate and display the total time taken to complete the triathlon. 
# Also display the award they will receive according to the following table based on the total qualifying time the user entered.

# Total Time					Award
# Under QT					Provincial Colours
# Within 5 minutes of QT			Provincial Half Colours
# Within 10 minutes of QT			Provincial Scroll
# 10 minutes or more than QT		        Provincial Certificate


# ================= BONUS Optional Task ==================
# Create a new Python file in this folder called “Optional_task.py.”
# Create a program that asks the user to enter an integer, and determine if it is:
#   - divisible by 2 and 5,
#   - divisible by 2 or 5,
#   - not divisible by 2 or 5
# Display your result 


