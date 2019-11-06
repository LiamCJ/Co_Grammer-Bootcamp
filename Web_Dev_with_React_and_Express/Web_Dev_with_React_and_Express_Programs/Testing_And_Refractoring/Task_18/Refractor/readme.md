changed the server Javascript file from index.js to server.js .

changed the file in the src "webProject.json" to APIdata.json .

changed the file in front-end\src\components "expressAPI.js" to "API-UI.js" .

changed the class name in API-UI.js from ApiCall to ApiUI .

Added helmet to the package.json in order to improve the security of my code .

changed the API-UI.js from having different functions to call different HTTP method to have one that does all three by accepting 
a parameter that specifies what HTTP method should be called.

added the variable newData to the server.js in order to get specify keys from the req.body object that is sent from the API-UI.js input.