/* Below we create a constructor method that will be used to create objects. This constructor method 
acts as a blueprint for all objects created using this method. All Person objects created with the method
below will have the properties: first name, last name, age, gender, interests and profilePic. In JavaScript,
this type of contsructor function can be used as a class. 
*/
function Person(first, last, age, gender, interests, profilePic) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.imageSrc = profilePic;
    this.greeting = function() {
        alert("Hi! I'm " + this.name.first + ".");
    };
}

/*Next we create 2 objects (personObj1 and personObj2) using the constructor method. We pass all the 
values that we want to assign to the properties through to the constructor method as arguments. The object 
stored in the variable 'personObj1' will therefore, be a person called Tom Hiddlestone who is a 37 year old male.
personObj2 is another person object that is a 34 year old female called Scarlett Johansson. 

Compare this way of creating objects with the approach we used to create objects in Example 1 and 2.
As you can see, using a constructor method is a more efficient way of creating more than one object of the 
same type (E.g. type Person in this case.) */
var personObj1 = new Person(
    "Tom",
    "Hiddleston",
    37,
    "Male",
    "Acting",
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Tom_Hiddleston_%28Avengers_Red_Carpet%29.jpg"
);
var personObj2 = new Person(
    "Scarlett",
    "Johansson",
    34,
    "Female",
    "Singing",
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Scarlett_Johansson_in_Kuwait_01b-tweaked.jpg"
);

//Below we create an array that stores the Person objects we have created.
let arrayOfPeople = [personObj1, personObj2];

var loaded = {};
//Below we create a function that will be used to add the information stored in the person objects to our HTML page.
loaded.addPeople = function() {
    arrayOfPeople.forEach(function(actor) { //Loop through each object stored in the array using the forEach method.
        let div = document.getElementById("details"); //We are going to add the details about each of our objects using this div on our HTML page.
        //For each of the objects, we create an image element that will display the Person's profile pic.
        let imgProfile = document.createElement("img");
        imgProfile.src = actor.imageSrc;
        imgProfile.alt = actor.name.first + " " + actor.name.last;
        imgProfile.style.height = "200px";
        imgProfile.style.width = "150px";

        //For each of the objects, we create 2 buttons.
        //The first button we add for each person object is called btnGreeting.
        let btnGreeting = document.createElement("button"); 
        btnGreeting.innerHTML = "Say hi";
        //We add an eventListener that will recognise when btnGreeting has been clicked and will call the 
        //greeting method for the object we are currently busy with in this loop (actor).
        btnGreeting.addEventListener("click", function(e) {
            actor.greeting();//This greeting method was created using the constructor method.
        });

        //We also want to add a button that will display a more detailed message that displays the biography of the person object.
        let btnBio = document.createElement("button");
        btnBio.innerHTML = "Show Bio";
        /*We didn't create a method called Bio in the Person constructor function. We can also 
        add methods to objects outside of the constructor function. Below is an example of this. 
        Here we create a method called bio that we add to the current person object that we are working with in the loop */
        actor.bio = function() {
            alert(
                this.name.first +
                " " +
                this.name.last +
                " is " +
                this.age +
                " years old. " +
                this.name.first +
                " likes " +
                this.interests +
                "."
            );
        };
        //We add an eventListener that will recognise when btnBio has been clicked and will then call the 
        //Bio method for the object we are currently busy with in this loop (actor).
        btnBio.addEventListener("click", function(e) {
            actor.bio();
        });
       
        let lineBreak = document.createElement("br");

        //Once we have created all the elements we need to display on our HTML page, we append them to the Div element that we 
        //want to use to contain the information we want to display. 
        div.appendChild(imgProfile);
        div.appendChild(btnBio);
        div.appendChild(btnGreeting);
        div.appendChild(lineBreak);
    }); //End forEach
}; //End addPeople()

loaded.addPeople();