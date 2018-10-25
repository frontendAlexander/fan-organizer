import React from 'react';
import Stripes from './Stripes';
import Text from './Text';

import styles from './firstScreen.css';

export const FirstScreen = (props) => {
    return (
    	<div className={styles.wrapper} style={{background:"#a3a8ee"}}>
			<Stripes/>
			<Text/>
		</div>
      )
};

export default FirstScreen;
