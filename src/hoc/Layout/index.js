import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Layout.css';


const Layout = (props) => {
	return (
			<div className={styles.container}>
				<Header/>
				{props.children}
				<Footer/> 
			</div>
		)
};

export default Layout;