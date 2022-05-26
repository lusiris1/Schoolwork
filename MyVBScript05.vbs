' This is comment block

' This program will accept two arguments from the command line

' The program will run the loop only if the first number is greater than the second number

fnum = cint(WScript.arguments(0))

snum = cint(WScript.arguments(1))

If snum > fnum then

   For I = fnum to snum

      WSH.Echo ("I =" & I)  ' & operator is concatenation operator to print number and strings together

   Next
   Else
   WSH.Echo("Second Number must be greater than first number")
End If