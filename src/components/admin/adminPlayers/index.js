import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { firebasePlayers } from '../../../firebase';
import { firebaseIterator, reverseArray } from '../../ui/helpers';
import AdminLayout from '../../../hoc/AdminLayout';
import styles from './adminPlayers.css';

export default class AdminPlayers extends Component {
	state = {
		isLoading: true,
		players: []
	}
	componentDidMount(){
		firebasePlayers.once('value').then((snapshot)=>{
			const players = firebaseIterator(snapshot);
			this.setState({
				isLoading: false,
				players: reverseArray(players)
			})
		})
	}
	render(){

		return (
			<AdminLayout>
				<div className={styles.wrapper}>
					<Paper>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>
										Имя
									</TableCell>
									<TableCell>
										Фамилия
									</TableCell>
									<TableCell>
										Номер
									</TableCell>
									<TableCell>
										Позиция
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{ this.state.players ?
								this.state.players.map((player,i)=>(
									<TableRow key={i}>
										<TableCell>
											<Link to={`admin-players/add-players/${player.id}`}>
												{player.name}
											</Link>
										</TableCell>
										<TableCell>
											<Link to={`admin-players/add-players/${player.id}`}>
												{player.lastname}
											</Link>
										</TableCell>
										<TableCell>
											
												{player.number}
											
										</TableCell>
										<TableCell>
											
												{player.position}
											
										</TableCell>
									</TableRow>
								))
								: null  }
							</TableBody>
						</Table>
					</Paper>
					<div className={styles.progress}>
						{ this.state.isLoading ?
							<CircularProgress thickness={7} style={{color:'#0e1731'}}/>
							: ''
						 }
					</div>
				</div>
			</AdminLayout>
		)
	}
};


