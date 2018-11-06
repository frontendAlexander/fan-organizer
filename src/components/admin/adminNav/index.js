import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {firebase} from '../../../firebase';
import styles from './adminNav.css';

export const AdminNav = (props) => {
	const links = [
		{
			title: 'Матчи',
			linkTo: '/admin-matches'
		},
		{
			title: 'Добавить матч', 
			linkTo: '/admin-matches/edit-match'
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
		links.map((item, i)=>(
				<Link to={item.linkTo} key={i}>
					<div className={styles.item} key={i}>{item.title}</div>
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