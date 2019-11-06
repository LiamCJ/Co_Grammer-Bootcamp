/* To run this code:
1. Copy 'Example 2' folder to your local machine.
2. Navigate to this folder using the command line interface. E.g. 'cd c:\Example 2'
3. Now type 'npm install' using the command line interface. 
4. You should now be able to execute this code using your text editor (as you have been doing in previous JavaScript tasks) or
by typing 'node fetch-example' in the command line. 

In this example we use the Fetch API to fetch data about a book that is made available usign the Google Books API: https://developers.google.com/books/docs/static-links
To see what is returned when we call the fetch() method, copy and paste the URL that is passed as an argument to the fetch method into your browser.
*/

require('isomorphic-fetch'); // This statement is required to use the fetch API. See more about this package here: https://www.npmjs.com/package/isomorphic-fetch

let items = []; //Create an array called 'items' - we will store the data that we retrieve using the fetch API in this variable.

/* We use the fetch method below to fetch data using the argument specified (which is in this case is the URL for the Google Books API
which will return json about books). Remember that the fetch method returns a promise that resolves to the Response to that request, whether it is successful or not. 
Remember that a promise basically allows the interpreter to carry on with other tasks while a function is executed without waiting for that function to finish. 
This is because the promise, ‘promises’ to let you know the outcome of the function once it is finished. The basic structure of a promise is:
doSomething().then(successCallback, failureCallback);
A promise uses callbacks to execute different functions based on whether the desired action succeeded or failed. 
*/

fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(res => res.json())
    .then((result) => {
        items = result.items;
        console.log(items);
    }),
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
        console.log(error);
    }

/* Step 1: The code above is written using arrow functions. Rewrite the code above without using any arrow functions.

Remember that the basic syntax for an arrow function is :
(param1, param2, …, paramN) => { statements } 

You can use Babel (https://babeljs.io/repl) to convert to older versions of JavaScript.

Insert your code for step 1 below this comment:
*/

fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699") //[lines 47,63,78] Calling the fetch function passing the url of the API as a parameter
    .then(function(details) {
        return details.json() //[lines 49,64,79] Transform the data into JSON
    })
    .then(function(result) {
        items = result.items; //[lines 52,66,80,81] store the desired info 
        console.log(items); //[lines 53,67,82,832] display the desired info
    }),
    function(error) { //[lines 55,68,85] gets any errors while [lines 56,68,86] displays the errors
        console.log(error);
    }

/*Step 2: Rewrite the above code using an async/await function below.*/


async function asyncAwait() {
    const details = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    const result = await details.json();
    try {
        items = result.items;
        console.log(items);
    } catch (err) {
        console.log(error);
    }
}
asyncAwait();

/* Step 3: Copy and paste the URL for the API (https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699) into your browser
to examine the data returned by google books. Now write the code to display only the title and description of the book returned.*/

fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(details => details.json())
    .then((result) => {
        let title = result.items[0].volumeInfo.title;
        let descp = result.items[0].volumeInfo.description;
        console.log("Title: " + "\n" + title + "\n");
        console.log("Description: " + "\n" + descp);
    }),
    (error) => {
        console.log(error);
    }