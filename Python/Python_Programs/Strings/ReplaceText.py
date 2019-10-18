#This program will print the original phrase backwards without the exclamation marks
sstring = "The!quick!brown!fox!jumps!over!the!lazy!dog!" #sstring where the single string is stored
rstring = sstring.replace("!"," ")           #rsting stands for replace string where i store the version of sstring where '!' is replaced with spaces
print(rstring)
ustring = rstring.upper()                    #ustring stands for upper string where the version of rstring is capitalized
print(ustring)
print(ustring[::-1])                         #Here I used a online resource where I found an easier way to reverse a string with [::-1] by printing the string starting from the last characters
                                             #line 7's ([::-1]) starts by print the last characters which is -1 first and then continue printing from then with the first colon which continues the printing until it reaches the first character