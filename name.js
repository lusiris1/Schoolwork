/*
  A quick introduction to JavaScriptcript.
  All you need is an editor with linenumber such as textpad or notepad++, and browser
  (IE, Chrome, Firefoxe, and Safari)
  Sammy Abaza
 */
 
 /* to learn any programming language you must learn the following
 
   1- declare and use variables
   2- using if-then
   3- looping
  
 */
 
 /*
   advanced topics
  
   functions()
   objects and classes
  
 */
 
 
 // declare variables
 
 var firstName
 var lastName
 firstName="Sammy"
 lastName="Abaza"
 
 var fullName=lastName+", "+firstName
 alert("My Name is "+ fullName)

 // if-then
 var myID="007"
 if(myID=="007")
 {
  alert("You are Bond, James Bond")
 }
 else
 {
  alert("You are Bundy, Al Bundy")
 }

 // loop 10 times
 for(i=0;i<10;i++)
 {
   document.write("Hello "+i +"\n")     //\n for new line
 }
 
 //function is a group of code with a name, function return a value
 function addTwoNum(num1, num2)
 {
    return num1+num2
 } 
 
  //test
 var result=addTwoNum(10, 20)
 alert(result)