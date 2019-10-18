
age = int(input("Enter your age: "))
weight = float(input("Enter your weight in kg: "))
height = float(input("Enter your height in m: "))
BMI = round(weight/(height*height),2)
print ("At age " + str(age) + " your BMI is " + str(BMI))
