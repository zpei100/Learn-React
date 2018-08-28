import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/search_bars.js';

const API_KEY = 'AIzaSyC3gln5c8-UDkN6wUS40zHHFBQAaJSq4k8';



const App = function() {
	return(
		<div>
			<SearchBar />
		</div>
	); 
};

//reactDOM.render calls the render method on the passed in object


ReactDOM.render(<App />, document.querySelector('.container'));


