import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { firebaseMatches, firebaseDB } from '../../../firebase';
import { firebaseIterator } from '../../../components/ui/helpers';

import styles from './leagueTable.css';

const style = {
	cell: {
		padding: '4px 16px 4px 11px',
		color: 'black',
		position: 'center'
	}
}
export default class LeagueTable extends Component {
	state = {
		positions: []
	}
	componentDidMount(){
		firebaseDB.ref('positions').once('value').then((snapshot)=>{
			const positions = firebaseIterator(snapshot);
			this.setState({
				positions: positions
			})
		})
	}
	showTeamPositions = (pos) => (
		pos ?
			pos.map((pos,i)=>(

								<TableRow key={i}>
									<TableCell style={style.cell}>
										{i + 1}
									</TableCell>
									<TableCell style={style.cell}>
										{pos.team}
									</TableCell>
									<TableCell style={style.cell}>
										{pos.w}
									</TableCell>
									<TableCell style={style.cell}>
										{pos.d}
									</TableCell>
									<TableCell style={style.cell}>
										{pos.l}
									</TableCell>
									<TableCell style={style.cell}>
										{pos.pts}
									</TableCell>
								</TableRow>
								: null
			)) : null
	)
	render(){
		return (
			<div className={styles.wrapper}>
				<div style={{textAlign: 'center', fontSize: '2rem'}}>Турнирная таблица</div>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell style={style.cell}>Pos</TableCell>
							<TableCell style={style.cell}>Team</TableCell>
							<TableCell style={style.cell}>W</TableCell>
							<TableCell style={style.cell}>L</TableCell>
							<TableCell style={style.cell}>D</TableCell>
							<TableCell style={style.cell}>Pts</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.showTeamPositions(this.state.positions)} 
					</TableBody>
				</Table>
			</div>
		)
	}
};


