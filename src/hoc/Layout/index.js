import React from 'react';
import styles from './Layout.css';



const Layout = (props) => {
	return (
			<div className="container">
				
				{props.children}
				
			</div>
		)
};

export default Layout;