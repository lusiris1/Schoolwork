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
  for name in files:
    fs=os.stat(os.path.join(root, name))
    if file_size > fs.st_size:
       print(os.path.join(root, name), fs.st_size)
