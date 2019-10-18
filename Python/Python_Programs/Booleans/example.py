#************* HELP *****************
#REMEMBER THAT IF YOU NEED SUPPORT ON ANY ASPECT OF YOUR COURSE SIMPLY LOG IN TO www.hyperiondev.com/support TO: 
#START A CHAT WITH YOUR MENTOR, SCHEDULE A CALL OR GET SUPPORT OVER EMAIL.
#************************************


# PLEASE ENSURE YOU OPEN THIS FILE IN IDLE otherwise you will not be able to read it.

# *** NOTE ON COMMENTS ***
# This is a comment in Python. 
# Comments can be placed anywhere in Python code and the computer ignores them - they are intended to be read by humans. 
# Any line with a # in front of it is a comment.
# Please read all the comments in this example file and all others.



# ========= What are Booleans? =========
# The Boolean data type has only two values, namely True and False.
# Booleans are closely related to conditional statements, which evaluate to either True or False.
# Conditional statements are found in control statements such as if statements


# ========= Declaring Boolean Variables  =========
# Boolean variables are declared like any other type of variable

# ************ Example 1 ************
hasDriversLicence = True 
hasTrafficFine = False
# Please note when assigning either True or False to a variable don't forget to capitalise the first letter.
# Python is case sensitive which means, true, True and TRUE, mean three diffrent things!


# ========= Booleans in if Statements =========
# The if statement is an example of a control statement. 
# A control statement is a statement that determines whether or not other statements will be executed.
# The if statement contains a condition that evaluates to either True or False which is a Boolean value.
# This determines whether or not the indented statements will be executed. 


# ************ Example 2 ************
print("Example 2: ")

isSunny = True

if isSunny:
    print ("It is sunny today, don't forget the sunscreen!")
    
#Explanation:
# Since isSunny is True the print statement will execute and print out "It is sunny today, don't forget the sunscreen!”
# If isSunny is changed to False the print statement will not execute and nothing will be printed. 



# ****************** END OF EXAMPLE CODE ********************* # 


# == Make sure you have read and understood all of the code in this Python file.
# == Please complete the compulsory task below to proceed to the next task ===
# == Ensure you complete your work in this folder so that one of our tutors can easily locate and mark it ===



# ================= Compulsory Task ==================
# Create a Python file called “Password.py” in this folder.
# One of the most important patterns in computers and on the internet is your password.
# For a password to be classified as ”Strong” the password needs to be structured in a certain way.
# Password Strength is determined by:
#   - The length of the password (at least 6 characters) (haveLength)
#   - Needs to contain uppercase letters (upCase)
#   - Needs to contain lowercase letters (lowCase)
#   - Needs to contain numbers (haveNum)
# Declare boolean variables for each one of these characteristics. 
# You will find the name of the variable next to the condition above, they must all be initialised as false. 
# Then ask the user a series of yes or no questions for each variable,and change the boolean variable to True or False based on their answer.
# Once 3 of the characteristics are met (3 of the variables == True) then display a message saying this is a suitable password.

# ================= BONUS Optional Task ==================
# Create a Python file called “Optional_task.py” in this folder.
# This program will help the user decide what to wear
# In order to determine what to wear, you need to determine whether the temperature is greater than 20 degrees,
# whether it is the weekend, and whether it is sunny.
# Declare boolean variables for each one of these characteristics.
# Then, ask the user a series of yes or no questions for each variable, and change the boolean variable to True or False based on their answer.
# If the temperature is greater than 20 degrees then the user should wear a short sleeved shirt 
# If the temperature is less than 20 degrees then the user should wear a long sleeved shirt 
# If it is the weekend the user should wear shorts 
# If it is a weekday the user should wear jeans 
# if it is sunny the user should wear a cap
# if it is not sunny the user should wear a raincoat
# print out the  user's full outfit 


