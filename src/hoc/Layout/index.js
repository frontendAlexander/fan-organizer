import React from 'react';
import styles from './Layout.css';
import Header from '../../components/Header';



const Layout = (props) => {
	return (
			<div className="container">
				<Header/>
				{props.children}
				
			</div>
		)
};

export default Layout;