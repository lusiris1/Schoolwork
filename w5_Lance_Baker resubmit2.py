'''
Lance Baker
ENTD261
Python
Resubmit
'''

import os, sys, time

folder = ""
folder=input("What folder do you want?")
#Named the folder
print()
file_size=""
file_size=float(input("What is the smallest file size?"))
#dictated the file size
myfiles = ""
for root, dirs, files in os.walk(folder):
      for list in files:
       createDate = time.ctime(os.path.getctime(list))
       myfiles = list, "Size: %.1f bytes"%file_size, "Created date: " + createDate
       if file_size>os.path.getsize(list):
           try:
               print(myfiles)
           except Exception:
               pass
