'------------------------------'
'''This is my flower box'''
'''Lance Baker'''
'''Assignment 2 week 2'''
'''ENTD261'''
'---------------------------------'
fnum =   cint(WScript.arguments(0))        'fnum is a variable contain number from first argument

snum =   cint(WScript.arguments(1))       'snum is a variable contain number from second argument

tnum = cint(WScript.arguments(2))         'tnum is a variable containing number from third argument

avgvar = 3                                'wanted to make the avg a variable in case we add more numbers

total = fnum + snum + tnum                                       'total is a variable

avg = total / avgvar 

WSH.Echo ("The total =" & total)              'states the total

WSH.Echo ("The avg =" & avg)        'states the average
