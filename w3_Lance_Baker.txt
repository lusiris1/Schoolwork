'Lance Baker
'Assignment week #3
'ENTD261
'06/15/2020

fn=InputBox("Enter what folder you want") 'Simple inputbox for the folder name

Set fs = CreateObject("Scripting.FileSystemObject") ' create object name of file system

If fs.FolderExists(fn) then 'checks to make sure input is good to check for folders 

   msgbox "good folder" ' tells you if it works

else

   msgbox "bad folder" 'tells you if it doesn't

end if

Set folder = fs.GetFolder(fn) 'variable to hold file info

wscript.echo "Folder Results File Created"

Set files = folder.Files

For Each file in files

    wscript.echo "Name: " & (file.name)

    wscript.echo "Size: " & (file.size)

    wscript.echo "Date: " & (file.datecreated)

Next