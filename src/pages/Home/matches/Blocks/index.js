import React,{ Component } from 'react';
import { firebaseMatches } from '../../../../firebase';
import { firebaseIterator, reverseArray } from '../../../../components/ui/helpers';
import MatchesBlock from '../../../../components/ui/matches_blocks';
import Slide from 'react-reveal/Slide';

import styles from './Blocks.css';

class Blocks extends Component {
	state ={
		matches: []
	}
	componentDidMount(){
		firebaseMatches.limitToLast(6).once('value')
		.then( (snapshot) =>{ 
			const matches = firebaseIterator(snapshot);
			console.log(matches);
			this.setState({
					matches: matches
			})
		})
	}
	showMatches = (matches) => (
			this.state.matches ?
			this.state.matches.map( (match) => (
				<div className={styles.item}>
					<Slide bottom key={match.id}>
						<MatchesBlock match={match}/>
					</Slide>
				</div>
			))
			: null
	)
	render(){
		return (
			<div className={styles.wrapper}>
				{this.showMatches(this.state.matches)}
			</div>
        )
	}		
};
export default Blocks;