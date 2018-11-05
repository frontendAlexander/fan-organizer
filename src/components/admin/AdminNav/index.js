import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {firebase} from '../../../firebase';
import styles from './AdminNav.css';

export const AdminNav = () => {
	const links = [
		{
			title: '1',
			linkTo: '/'
		},
		{
			title: '2', 
			linkTo: '/'
		},
		{
			title: '3',
			linkTo: '/'
		},
		{
			title: '4',
			linkTo: '/'
		},
		{
			title: '5',
			linkTo: '/'
		}
	];
	const renderItems = () => (
		links.map((item)=>(
				<Link to={item.linkTo} key={item.title}>
					<div className={styles.item} key={item.title}>{item.title}</div>
				</Link>
			))
		)
		return (
			<div className={styles.wrapper}>
				{renderItems()}
			</div>
		)

	};

export default AdminNav;