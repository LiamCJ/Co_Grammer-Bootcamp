::an if statement that creates a folder named "if_folder" if a folder named "new_folder" already exists
if exist new_folder (mkdir if_folder)

::a conditional that creates a folder named "hyperion" if a folder named "if_folder", but if there is no folder named "if_folder" a folder a folder named "react-projects" is created
if exist if_folder (mkdir hyperion) else (mkdir react-projects)

cmd.exe