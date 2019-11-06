import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Image } from "react-bootstrap";
// The object that contains the users data
var user = {
    "name": "Liam",
    "surname": "Jones",
    "date_of_birth": "2000/12/19",
    "country": "South Africa",
    "email": "Liamcjones@gmail.com",
    "telephone": "0652468910",
    "company": "Ubisoft",
    "profile_picture": "image.jpg",
    "interests": ["Reading Manga", "Gaming", "Watching Series", "Programming"]
};
// A JSX that contains the users	Date of Birth,Country of Origin,Email address,Telephone, & Company Name
const details = (
    <article>
	Date of Birth: {user.date_of_birth} <br/>
	Country of Origin: {user.country}<br/> 
	Email address: {user.email}<br/> 
	Telephone: {user.telephone}<br/> 
	Company Name: {user.company}
	</article>
);
// A JSX that contains the users interests
const ints = (
    <article>
	<h3>Interests</h3>
	<ol>
	<li>{user.interests[0]}</li>
	<li>{user.interests[1]}</li>
	<li>{user.interests[2]}</li>
	<li>{user.interests[3]}</li>
	</ol>
		</article>
)
// A JSX that displays all the users info
// [line 48]displays the users name and surname
// [line 49]displays the users profile picture
// [line 50]displays the users Date of Birth,Country of Origin,Email address,Telephone, & Company Name
// [line 51]displays the users interests
const form = (
    <section>
    <h1>{user.name} {user.surname}</h1>
   <article id="image"><Image src={user.profile_picture} rounded /></article>
   <article id="info"></article>
   <article id="ints"></article>
	</section>
);
// [lines 55-57] renders the JSX to the respectful tag ID's
ReactDOM.render(form, document.getElementById('root'));
ReactDOM.render(details, document.getElementById('info'));
ReactDOM.render(ints, document.getElementById('ints'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();