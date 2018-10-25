import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Player from '../../../../resources/images/players/avatar-player.jpg';
import PlayerCard from '../../../../components/ui/playerCard';

import styles from './cards.css';

class HomeCards extends Component {
	state = {
		show: this.props.show,
		cards: [
			{
				top:90,
					left:300
			},
			{
				top:120,
					left:200
			},
			{
				top:150,
					left:100
			},
			{
				top:180,
					left:0
			}
		]
	}
	showAnimateCards = () => (
		this.state.cards.map( (card,i)=>(
			<Animate key={i}
				show={this.props.show}
				start={{
					left:0,
					top:0
				}}
				enter={{
					left: [card.left],
					top: [card.top],
					timing: {duration: 1000, ease: easePolyOut}
				}}>
						{( {left,top} ) => {
							return (
								<div className={styles.card} style={{position:'absolute', left, top}}>
									<PlayerCard
										number="1"
										name="Red-Blue"
										lastname="Player"
										bck={Player}
									/>
								</div>	
								)
						}}
			</Animate>
	))
	)
	render(){
		return (
                <div>
					{this.showAnimateCards()}
				</div>
        )
	}
};

export default HomeCards;