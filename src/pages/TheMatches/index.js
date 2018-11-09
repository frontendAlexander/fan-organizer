import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { firebaseMatches } from '../../firebase.js';
import { firebaseIterator } from '../../components/ui/helpers';
import MatchesList from './matchesList';
import LeagueTable from './leagueTable';
import styles from './TheMatches.css';

class TheMatches extends Component {
	state = {
		loading: false,
		matches: [
			
		],
		filterMatches: [],
		playerFilter: 'All',
		resultFilter: 'All'
	}
	componentDidMount(){
		firebaseMatches.once('value').then((snapshot)=>{
			const matches = firebaseIterator(snapshot);

			this.setState({
				loading: false,
				matches: matches,
				filterMatches: matches
			})
		})
	}
	
	render() {
		return (
				<div className={styles.container}>
					
					<div className={styles.left}>
						<MatchesList matches={this.state.matches} />
					</div>
					<div className={styles.right}>
						<LeagueTable />
					</div>
				</div>
			)
	}
};

export default TheMatches;