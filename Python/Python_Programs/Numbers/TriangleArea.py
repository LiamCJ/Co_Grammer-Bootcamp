#this program calculates the area of a triangle 
import math                                                #in order to find the square root i used a online source solution, which required me to import math in order for me to use (math.sqryt)
side1 = float(input("Enter the size of side 1: "))           
side2 = float(input("Enter the size of side 2: "))           
side3 = float(input("Enter the size of side 3: "))           
s = (side1 + side2 + side3)/2                               
area = math.sqrt(s*((s-side1)*(s-side2)*(s-side3)))          # here i applied math.sqrt in order to find the square root of the solution
print("The area of the triangle is: "+str(area))
