import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { firebasePlayers, firebase } from '../../firebase';
import { Promise } from 'core-js';
import styles from './TheTeam.css';
import { firebaseIterator } from '../../components/ui/helpers';
import PlayerCard from '../../components/ui/playerCard';


export default class TheTeam extends Component {
	state = {
		loading: true,
		players: []
	}
	componentDidMount(){
		firebasePlayers.once('value').then((snapshot)=> {
			const players = firebaseIterator(snapshot);
			const promises = [];

			for(let key in players){
				promises.push(new Promise( (resolve,reject)=> {
					firebase.storage().ref('players')
					.child(players[key].image).getDownloadURL()
					.then( (url) =>{
						players[key].url = url;
						resolve()
					})
				}))
			}
			Promise.all(promises).then(()=>{
				this.setState({
					loading: false,
					players
				})
			})
		}) 
	}
	showPlayersByCategory = (category) => (
		this.state.players ?
		this.state.players.map((player, i)=>{
			return player.position === category ?
			<Fade left key={i} delay={i*20}>
				<div>
					<PlayerCard
						number={player.number}
						name={player.name}
						lastname={player.lastname}
						bck={player.image}
					/>
				</div>
			</Fade>
			: null
		})
		: null
	)
	render(){
		return (
			<div>
				<h1>Команда</h1>
				{!this.state.loading ?
					<div className={styles.wrapper}>
						<div className={styles.item}>
							<div className={styles.title}>Keepers</div>

							<div className="team-cards">
								{this.showPlayersByCategory('Keepers')}
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.title}>Defence</div>

							<div className="team-cards">
								{this.showPlayersByCategory('Defence')}
							</div>
						</div>
                        <div className={styles.item}>
                                <div className={styles.title}>Midfield</div>

                                <div className="team-cards">
                                    {this.showPlayersByCategory('Midfield')}
                                </div>
                            </div>
                        <div className={styles.item}>
                                <div className={styles.title}>Strikers</div>

                                <div className="team-cards">
                                    {this.showPlayersByCategory('Striker')}
                                </div>
                            </div>
                        </div>
				: null}
			</div>
        )
	}
} 