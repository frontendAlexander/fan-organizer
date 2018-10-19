import React from 'react';
import styles from './Layout.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



const Layout = (props) => {
	return (
			<div className="container">
				<Header/>
				{props.children}
				<Footer/> 
			</div>
		)
};

export default Layout;