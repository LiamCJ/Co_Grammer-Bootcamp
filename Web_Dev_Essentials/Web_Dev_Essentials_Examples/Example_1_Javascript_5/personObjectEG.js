/* This example is from here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
Please refer to the website above for more information.

The person object below is made up of a number of PROPERTIES that describe
the person (name, age, gender and interests) and of METHODS (bio and greeting)
that allow a person object to do something with the data that is stored
about the object in its properties.

Notice how the methods of the person object are called using the dot notation
in personObjectEG.html */

var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

//Below we create another object called riaz. There is a quicker way of creating mutliple objects
//of the same type (to avoid retyping this similiar code each time) which we will consider in example 3. 
var riaz = {
  name: ['Riaz', 'Jones'],
  age: 26,
  gender: 'male',
  interests: ['programming', 'education', 'web development'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
}