::creates a folder named "Albums"
mkdir Albums

::changes the directory to the new folder named "Albums" 
cd Albums

:: creates new folders inside the folder named "Albums"
mkdir The Eminem Show
mkdir Paid_In_Full
mkdir Enter The Wu-Tang

::changes the directory to one of the folders created inside the folder named "Albums" which is named "Paid_In_Full"
cd Paid_In_Full

::creates new folders inside the folder named "Paid_In_Full"
mkdir My_Melody
mkdir I_Ain't_No_Joke
mkdir Move_The_Crowd

::reverses the directory back by one 
cd ..

::deletes two of the folders created inside the folder named "Albums"
rmdir The Eminem Show
rmdir Enter The Wu-Tang

cmd.exe