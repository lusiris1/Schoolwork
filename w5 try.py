'''
Lance Baker
ENTD261
Python
Resubmit
'''

import os, sys, time

folder = "C:\ENTD261"
#Named the folder
file_size=200
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
