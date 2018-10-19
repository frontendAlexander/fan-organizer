import React from 'react';
import { Link } from 'react-router-dom';

import styles from './icons.css';
import logo from '../../../resources/images/logos/logo-fc-cska.png';

export const CSKALogo = (props) => {
	const template = <div 
	style={{height:props.height, width:props.width, background:`url(${logo}) no-repeat`}}></div>

	if (props.link) {
		return(
			<Link to={props.linkTo} className={styles.linkLogo}>
				{template}
			</Link>
		) 
	} else {
		return template;
	}
};

export default CSKALogo;