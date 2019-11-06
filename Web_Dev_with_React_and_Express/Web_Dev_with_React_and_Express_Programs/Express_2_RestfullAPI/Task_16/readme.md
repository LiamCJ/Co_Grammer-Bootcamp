How To Use The:

Get Request:
When Using Get To Display Json Data The Path http://localhost:8080/api Should Be Used

Post Request:
When Using Post To Add New Data To The JSON The Path Should Be Used The Following Way:
http://localhost:8080/api/(Your Custom Id)/(The Title Of The Data)/(A Description Of The Data)/(The Url That Can Be Used To Display The Data)
e.g: http://localhost:8080/api/3/New Game/Describe what the game is about/A site where the game can be found

Delete Request:
When Using Delete To Remove Data From The JSON The Path Should Be Used In The Following Way:
http://localhost:8080/api?remove=(Specify The Id Of The Object You Want To Remove)
e.g: http://localhost:8080/api?remove=3

Put Request:
When Using Put To Updating Data From The JSON The Path Should Be Used The Following Way:
http://localhost:8080/api/ (Enter Whether You Want To Change The Details About Either 'title' or 'description')/?id=(Enter The ID of The Object)&(Enter What You Wanted To Be Changed)=(Enter The New Details)
e.g: http://localhost:8080/api/title/?id=3&title=Brand New Game or 
http://localhost:8080/api/description/?id=3&description=Information about the Brand New Game
