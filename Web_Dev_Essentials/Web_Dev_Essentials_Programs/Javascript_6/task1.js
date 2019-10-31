//constructor for each song entered
function Song(artist, title, albumN, genre) {
    this.Artist = artist;
    this.Title = title;
    this.AlbumN = albumN;
    this.Genre = genre;
};
//empty array to store song objects
var song = [];
//function to store the song entered by the user. 
function nSong() {
    //the new song entered by the user being made an objects
    let nSong = new Song(
        document.getElementById("artist").value,
        document.getElementById("title").value,
        document.getElementById("album").value,
        document.getElementById("genre").value
    );
    //conditional statement for when the array [song] is empty and when it is not
    if (song != null) { //if the array is not empty the stored objects will be called and the new song will be stored inside it
        song = JSON.parse(sessionStorage.getItem("Track") || JSON.stringify(song));
        song.push(nSong); // the new object is added to the array
        sessionStorage.setItem("Track", JSON.stringify(song)); //[lines 23,26,79,83,87,91,105] the stored data is updated
    } else { //if the array is empty the new object will be made the contents of the array instead of just added
        song = [nSong];
        sessionStorage.setItem("Track", JSON.stringify(song));
    };
};
//the function that displays the songs when ever the page is loaded
function display() {
    var uList = document.createElement("ul")
    document.getElementById("sng").appendChild(uList);
    song = JSON.parse(sessionStorage.getItem("Track")) //[lines 21,33,54,69,97] retrieves the stored data 

    song.forEach(function(info) {
        var aItem = document.createElement("li");
        aItem.innerHTML = info.Artist;
        uList.appendChild(aItem);
        var tItem = document.createElement("li");
        tItem.innerHTML = info.Title;
        uList.appendChild(tItem);
        var alItem = document.createElement("li");
        alItem.innerHTML = info.AlbumN;
        uList.appendChild(alItem);
        var gItem = document.createElement("li");
        gItem.innerHTML = info.Genre;
        uList.appendChild(gItem);
        var brk = document.createElement("br");
        uList.appendChild(brk);
    });
};
//[lines 54-59 & 61-66] appends options to their respective select tags in order to allow the user to select a tracks title
song = JSON.parse(sessionStorage.getItem("Track"));
song.forEach(function(sngs) {
    const optItem = document.createElement("option"); //[lines 59 & 67]creates new option to store a title of a song  
    optItem.innerHTML = sngs.Title; //[lines 60 & 68]sets the content of the option
    document.getElementById("edit").appendChild(optItem); //[lines 61 & 69]appends new option to the selected tag

});

song.forEach(function(sngs) {
    const optItem = document.createElement("option");
    optItem.innerHTML = sngs.Title;
    document.getElementById("rmve").appendChild(optItem);
});
//function to edit song details
function rSong() {
    song = JSON.parse(sessionStorage.getItem("Track"));
    var ind = document.getElementById("edit").selectedIndex;

    var nRtst = document.getElementById("newArtist").value;
    var nTtle = document.getElementById("newTitle").value;
    var nAlbm = document.getElementById("newAlbum").value;
    var nGnre = document.getElementById("newGenre").value;
    //The details of the songs will only be replaced with the data the user enters in the text box when the value of the text box is not empty
    if (nRtst != null) {
        song[ind].Artist = nRtst; //[lines 83,87,91,95] replace the set data with the users new data
    };
    if (nTtle != null) {
        song[ind].Title = nTtle;
    };
    if (nAlbm != null) {
        song[ind].AlbumN = nAlbm;
    };
    if (nGnre != null) {
        song[ind].Genre = nGnre;
    };

    sessionStorage.setItem("Track", JSON.stringify(song));
};
//function to delete songs
function dSong() {
    song = JSON.parse(sessionStorage.getItem("Track"));
    var ind = document.getElementById("rmve").selectedIndex; //the index of the song the user selects 

    delete song[ind]; //the song that the user selects gets deleted
    //[line 107-109] removes any null values that are deleted
    var song = song.filter(function(rmve) {
        return rmve != null; //only values that are not null will be returned
    });
    sessionStorage.setItem("Track", JSON.stringify(song));
};

/*Variable names:
nSong - new song
sngRow - song Row
aItem - artist Item
tItem - title Item
alItem - album item
gItem - genre Item
optItem - option Item
nRtst - new Artist
nTtle - new Title
nAlbm - new Album
nGnre - new Genre
ind - index
*/