import React,{ Component } from 'react';
import { firebaseMatches } from '../../../../firebase';
import { firebaseIterator, reverseArray } from '../../../../components/ui/helper';
import MatchesBlock from '../../../../components/ui/matches_blocks';
import Slide from 'react-reveal/Slide';

import styles from './Blocks.css';

class Blocks extends Component {
	state ={
		matches: []
	}
	showMatches = (matches) => {
		<div>
			matches ?
				this.matches.map( (match)=>{
					<Slide bottom key={match.id}>
						<div className="item">
							<div className="wrapper">
								<MatchesBlock match={match}/>
							</div>
						</div>
					</Slide>
				})
		</div>
	}
	/*
	state ={
		matches: [
			{
			   "away":"team1",
			   "awayThmb":"xz2",
			   "date":"2022-01-22",
			   "final":"No",
			   "local":"team2",
			   "localThmb":"xz1",
			   "referee":"Mitzi Sloan",
			   "resultAway":"2",
			   "resultLocal":"1",
			   "stadium":"Unknown stadium"
			},
			{
				"away":"team1",
				"awayThmb":"xz2",
				"date":"2022-01-22",
				"final":"No",
				"local":"team2",
				"localThmb":"xz1",
				"referee":"Mitzi Sloan",
				"resultAway":"2",
				"resultLocal":"1",
				"stadium":"Unknown stadium"
			 },
			 {
				"away":"team1",
				"awayThmb":"xz2",
				"date":"2022-01-22",
				"final":"No",
				"local":"team2",
				"localThmb":"xz1",
				"referee":"Mitzi Sloan",
				"resultAway":"2",
				"resultLocal":"1",
				"stadium":"Unknown stadium"
			 },
			 {
				"away":"team1",
				"awayThmb":"xz2",
				"date":"2022-01-22",
				"final":"No",
				"local":"team2",
				"localThmb":"xz1",
				"referee":"Mitzi Sloan",
				"resultAway":"2",
				"resultLocal":"1",
				"stadium":"Unknown stadium"
			 },
			{
				"away":"team2",
				"awayThmb":"xz2",
				"date":"2022-01-22",
				"final":"No",
				"local":"team2",
				"localThmb":"xz1",
				"referee":"Mitzi Sloan",
				"resultAway":"3",
				"resultLocal":"1",
				"stadium":"Unknown stadium"
			},
			{
				"away":"team2",
				"awayThmb":"xz3",
				"date":"2022-02-22",
				"final":"No",
				"local":"team2",
				"localThmb":"xz1",
				"referee":"Mitzi Sloan",
				"resultAway":"3",
				"resultLocal":"1",
				"stadium":"Unknown stadium"
			},
			{
				"away":"team3",
				"awayThmb":"xz2",
				"date":"2022-01-22",
				"final":"No",
				"local":"team2",
				"localThmb":"xz1",
				"referee":"Mitzi Sloan",
				"resultAway":"3",
				"resultLocal":"1",
				"stadium":"Unknown stadium"
			 },
			 {
				"away":"team3",
				"awayThmb":"xz2",
				"date":"2022-01-22",
				"final":"No",
				"local":"team2",
				"localThmb":"xz1",
				"referee":"Mitzi Sloan",
				"resultAway":"3",
				"resultLocal":"1",
				"stadium":"Unknown stadium"
			 }
		
		]
	}
	*/
	componentDidMount(){
		firebaseMatches.limitToLast(6).once('value')
		.then( (snapshot) =>{ 
			const matches = firebaseLooper(snapshot);

			this.setState({
					matches: reverseArray(matches)
			})
		})
	}
	render(){
		return (
			<div className={styles.wrapper}>
				{this.state.matches ?
				this.state.matches.map( (match)=>(
					<div className={styles.item}>
						<Slide bottom key={match.id}>
							<MatchesBlock match={match}/>
						</Slide>
					</div>
				))
				: null}
			</div>
        )
	}		
};

export default Blocks;