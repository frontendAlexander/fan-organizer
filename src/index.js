import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { firebase } from './firebase';
import './resources/css/index.css';

render(
  <App />,
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged((user)=>{
	render(<App user={user}/>, document.getElementById('root'));
})