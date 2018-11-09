import React from 'react';
import Stripes from './Stripes';
import Text from './Text';

import styles from './firstScreen.css';

export const FirstScreen = (props) => {
    return (
    	<div className={styles.container} style={{background:"#a3a8ee"}}>
			<h1 className={styles.title}>Проффесиональный футбольный клуб ЦСКА Москва</h1>
			<Stripes/>
			<Text/>

		</div>
      )
};

export default FirstScreen;
