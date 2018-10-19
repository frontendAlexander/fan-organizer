import React from 'react';

import { CSKALogo } from '../ui/icons';
import styles from './Footer.css';

const Footer = () => {
	return (
			<footer className={styles.bckBlue}>
				<div className={styles.logo}>
                    <CSKALogo width="40px" height="40px" link='true' linkTo="/"/>
				</div>
				<div className={styles.disclaimer}>
					CSKA Moscow 2018
				</div>
				
			</footer>
		)
} 

export default Footer;