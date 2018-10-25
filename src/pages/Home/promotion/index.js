import React from 'react';
import Enroll from './Enroll';

import styles from './promotion.css';

export const Promotion  = (props) => {
	return (
			<div className={styles.wrapper} style={{background:"#a3a8ee"}}>
				<div className={styles.container}>
					<Enroll/>
				</div>
			</div>
		)
};

export default Promotion;