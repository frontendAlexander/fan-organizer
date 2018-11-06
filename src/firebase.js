import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBeXd6AC21iNlE4r-Op0HQnLUV-n81DQY8",
	authDomain: "cska-a3715.firebaseapp.com",
	databaseURL: "https://cska-a3715.firebaseio.com",
	projectId: "cska-a3715",
	storageBucket: "cska-a3715.appspot.com",
	messagingSenderId: "776701221391"
};

firebase.initializeApp(config);
console.log(firebase);
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebasePlayers = firebaseDB.ref('players');
const firebaseTeams = firebaseDB.ref('teams');

export {
	firebase,
	firebaseDB,
	firebaseMatches,
	firebasePromotions,
	firebasePlayers,
	firebaseTeams
}