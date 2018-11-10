import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { firebase } from './firebase';
import './resources/css/index.css';
const user = true;
render(
  <App user={true} />,
  document.getElementById('root')
);
/*
firebase.auth().onAuthStateChanged((user)=>{
	render(<App user={user}/>, document.getElementById('root'));
});
*/

