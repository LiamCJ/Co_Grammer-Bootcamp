
num = int(input("Enter a number: "))
if num > 10:
    strNum = str(num)
    print (strNum*num)
elif num <= 10:
    for i in range (1,num):
        print ("Sorry, too small.")

