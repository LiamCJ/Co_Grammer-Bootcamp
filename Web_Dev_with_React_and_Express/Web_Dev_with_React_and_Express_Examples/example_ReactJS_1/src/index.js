/* As you can see, this a normal JavaScript file. In this example we use the React library
to create and render React element is the browser. You will notice how we use a mix of 
JavaScript and HTML (and JSX) in this page to create elements. In this file we also 
style the React element we create using React-Bootstrap and our own custom css file. */

import React from 'react';
import ReactDOM from 'react-dom';
/* The 2 import statements above allow us to access the React library. You will need these 
statements every time you create a React element or component. */ 
import Card from 'react-bootstrap/Card';
/*The import statement above imports the code needed to work with the React-Bootstrap Card component.
Notice the naming convention we use above: Whenever you use or create a component capitalise the first letter of the name of the component!!!
For the statement above to work, you will have had to install React-Bootstrap using NPM. See
React-Bootstrap installation instuctions here: https://react-bootstrap.github.io/getting-started/introduction/
See more information about the React-Bootstrap Card component here: https://react-bootstrap.github.io/components/cards/ */
import './css/custom.css';
/* To apply the rules in a CSS file is simple! Simply import the file as shown above */

/* Below we create a JavaScript object called 'courseInfo' */
const courseInfo = { "title": "Introduction to React", "topics": ["Elements", "Virtual DOM", "JSX"] };

/*Then we access the topics array in the 'courseInfo' object we created above. 
We loop through this array using the map method. We will use this map method often when
building React apps. (if you need a refresher on how the map
method works, see here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Notice in line 31 how we use JSX to mix markup and JavaScript. Because 'topic'
is in curly braces {}, it is treated an enclosed JavaScript expression.
The code below returns <li> elements for each of the values in the 'topics' array in the 'courseInfo' object.*/
const listItems = courseInfo.topics.map((topic) => {
    return <li>{topic}</li>
});

/*Below we create an element. Remember that React element we create can only return one element. However, that element can contain many child elements.
Notice that the element that we create below includes the Card component that we import above from React-Bootstrap. Besides using NPM
to install React-Bootstrap and importing the card element as we did in line 10, we also need to link to the React-Bootstrap 
stylesheet to use the co properly. Notice how we link to this stylesheet in line 41. 
You can find the link to the React-Bootstrap stylesheet here: https://react-bootstrap.github.io/getting-started/introduction/ 
Also notice how we include the 'listItems' element we created above in the element below. Remember to wrap any enclosed JavaScript expressions
in curly braces {} */
const reactElement = (
	<div>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
		<header>
			<h1>Welcome to {courseInfo.title}!</h1>
		</header>
		<Card bg="light" style={{ width: '18rem' }}>
  			<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
  			<Card.Body>
    			<Card.Title>In this task you will learn:</Card.Title>
    			<Card.Text>
      				<ul>{listItems}</ul>
    			</Card.Text>
  			</Card.Body>
		</Card>
	</div>
);

/*The last step is to render the element we have created. Note that the element we created gets 
appended to the <div> element that can be found in public/index.html. */
ReactDOM.render(reactElement, document.getElementById('root'));