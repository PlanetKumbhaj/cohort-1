# str1 =  input()
# str2 = str1 [::-1]
# if (str1 == str2):
#     print ("palindrom-num")
# else:
#     print("not palindrom-num")


str1 = input("Enter a word or number: ")

# Check if the input is a number
try:
    num = int(str1)
except ValueError:
    is_number = False
else:
    is_number = True

# Reverse the string
str2 = str1[::-1]

# Check if the string is a palindrome
if str1 == str2:
    if is_number:
        print("Palindromic number")
    else:
        print("Palindromic word")
else:
    print("Not a palindrome")


