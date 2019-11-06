fetch("http://api.icndb.com/jokes/random/3") // fetching the api
    .then((jokes) => jokes.json()) // Transform the data from the api into json
    .then(data => {  
        $("#chuck1").append(data.value[0].joke); //[lines 6-8] displays the jokes from the object from the api
        $("#chuck2").append(data.value[1].joke);
        $("#chuck3").append(data.value[2].joke);
    }),
    (error) => {
        document.getElementsByTagName("body").innerHTML = "Cannot Display Jokes"; //this will occur when there is an error
    }