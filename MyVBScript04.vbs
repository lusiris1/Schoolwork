fnum = cint(WScript.arguments(0))

snum = cint(WScript.arguments(1))

For I = fnum to snum

    WSH.Echo ("I =" & I)   ' & operator is concatenation operator to print number and strings together

Next