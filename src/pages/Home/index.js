import React from 'react';
import styles from './StartingPage.css';
import FirstScreen from './firstScreen';
import Matches from './matches';
import Players from './players';
import Promotion from './promotion';




const Home = (props) => {
    return (
    	<div className={styles.Home}>
    		<FirstScreen/>
			<Matches />
			<Players/>
			<Promotion/>
    	</div>
      )
};

export default Home;



