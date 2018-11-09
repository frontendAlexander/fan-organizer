import React, { Component } from 'react';
import {easePolyOut} from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './matchesList.css';

export default class MatchesList extends Component {
	state = {
		matchesList: []
	};
	static getDerivedStateFromProps(props, state){
		return state = {
			matchesList: props.matches
		}
	}
	showMatches = () => (
			this.state.matchesList ?
			<NodeGroup
				data={this.state.matchesList}
				keyAccessor={(d)=>d.id}
				start={() => ({ 
				    opacity: 0,
					x: -200
				    
				  })}
				enter={(d, i) => ({ 
				    opacity: [1],
					x: [0],
					timing: {duration: 500,delay: i * 50, ease: easePolyOut}
				    
				  })}
				update={(d, i) => ({ 
				    opacity: [1],
					x: [0],
					timing: {duration:500, delay: i * 50, ease: easePolyOut}
				  })}
				leave={(d, i) => ({ 
				    opacity:[0],
					x:[-200],
					timing: {duration: 500, delay: i * 50, ease: easePolyOut}
				  })}
				
			>
			{(nodes) => (
					<React.Fragment>
						{nodes.map( ( {key, data, state:{x, opacity} } ) => (
									<React.Fragment key={key}>
										<TableRow key={key} style={ {opacity,transform: `translate(${x}px)`} }>
												<TableCell>
													{data.date}
												</TableCell>
												<TableCell>
													<img className={styles.icon} style={{width:'20px',height:'20xp'}} src={`/team_icons/${data.localThmb}.png`}/>
													
													 	{data.local}
													 
												</TableCell>
												<TableCell>
													{data.resultLocal}<strong> - </strong>{data.resultAway}
												</TableCell>
												<TableCell>
												<img className={styles.icon} style={{width:'20px',height:'20xp'}} src={`/team_icons/${data.awayThmb}.png`}/>
													{data.away}
												</TableCell>
												<TableCell>
												{data.final === 'Yes' ? (
													<span className={styles.red}>Завершен</span>) :
													(<span className={styles.green}>Не сыгран</span>)
												}
												</TableCell>
										</TableRow>
									</React.Fragment>
								))}
					</React.Fragment>
				)}

			</NodeGroup> : null
		)
	render(){
		return (
				<div className={styles.container}>
					<Paper>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>
										Матчи
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.showMatches()}
							</TableBody>
						</Table>
					</Paper>
				</div>
			)
	}
};
