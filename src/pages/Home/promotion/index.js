import React from 'react';
import Enroll from './Enroll';

import styles from './promotion.css';

export const Promotion  = (props) => {
	return (
		
				<div className={styles.container} style={{background:"#a3a8ee"}}>
					<Enroll/>
				</div>
			
		)
};

export default Promotion;