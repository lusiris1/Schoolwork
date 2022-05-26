import os, sys, time

folder = "C:\ENTD261"
myfiles = ""
for root, dirs, files in os.walk(folder):
      for list in files:
       file_size = os.path.getsize(list)
       createDate = time.ctime(os.path.getctime(list))
       myfiles = list, "Size: %.1f bytes"%file_size, "Created date: " + createDate
       if os.path.getsize(list)>200:
           try:
               print(myfiles)
           except Exception:
               pass
