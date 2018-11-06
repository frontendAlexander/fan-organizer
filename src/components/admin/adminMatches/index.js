import React, {Component} from 'react';
import AdminLayout from '../../../hoc/AdminLayout';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { firebaseMatches } from '../../../firebase';
import { firebaseIterator } from '../../ui/helpers'
import styles from './adminMatches.css';

class AdminMatches extends Component {
	
	state = {
		isLoading: true,
		matches: []
	}
	componentDidMount(){
		firebaseMatches.once('value').then((snapshot)=>{
			const matches = firebaseIterator(snapshot);
			this.setState({
				isLoading: false,
				matches: matches
			})
		})
	}
	render(){
		const { user } = this.props;
		return (
			<AdminLayout>
					<div className={styles.matches}>
						<Paper>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>
											Дата
										</TableCell>
										<TableCell>
											Матч
										</TableCell>
										<TableCell>
											Результат
										</TableCell>
										<TableCell>
											Статус
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.matches ? 
										this.state.matches.map((match, i) => (
											<TableRow key={i}>
												<TableCell>
													{match.date}
												</TableCell>
												<TableCell>
													<Link to={`admin-matches/edit-match/${match.id}`}> Info </Link>
													{match.away} <strong>-</strong> {match.local}
												</TableCell>
												<TableCell>
													{match.resultAway}<strong>-</strong>{match.resultLocal}
												</TableCell>
												<TableCell>
												{match.final === 'Yes' ? (
													<span className={styles.red}>Завершен</span>) :
													(<span className={styles.green}>Не сыгран</span>)
												}
												</TableCell>
											</TableRow>
											)) : null }
								</TableBody>
							</Table>
						</Paper>
						<div className={styles.progress}>
							{ this.state.isLoading ?  
							<CircularProgress thickness={7} style={{color: '#0e1731'}}/>
							: ''
							}
						</div>
					</div>
				</AdminLayout>
			)
	}
};

export default AdminMatches;