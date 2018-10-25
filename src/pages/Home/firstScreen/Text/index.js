import React, {Component} from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedPlayer from '../../../../resources/images/photo-cska-talisman2.png';
import styles from './Text.css';


export default class Text extends Component {
	animateNumber = () => (
		<Animate 
			show={true}
			start={{
				opacity:0,
				rotate:0
			}}
			enter={{
				opacity:[1],
				rotate:[360],
				timing: {duration:1000, easy:easePolyOut}
			}}
		>
			{( {opacity,rotate} )=>{
				return(
						<div className={styles.number} style={{
							opacity,
							transform: `translate(260px,170px) rotate(${rotate}deg)`
						}}>
							<h2 className={styles.special}>
								Только клуб один - в сердце навсегда!
							</h2>
						</div>
					)
			}}
		</Animate>
    )
	
	animateSecond = () => (
		<Animate 
			show={true}
			start={{
				opacity:0,
				x:500,
				y:450
			}}
			enter={{
				opacity:[1],
				x:[273],
				y:[586],
				timing: {delay:4000, duration:2000, easy:easePolyOut}
			}}
		>
			{( {x,y,opacity} )=>{
				return(
						<div className={styles.second} style={{
							opacity,
							background: `url(${FeaturedPlayer})`,
							transform: `translate(${x},${y})`
						}}>
							<h1 className={styles.title}>Профессиональный футбольный клуб ЦСКА Москва</h1>
						</div>
					)
			}}
		</Animate>
    )
	animatePlayer = () => (
		<Animate 
			show={true}
			start={{
				opacity:0,
			}}
			enter={{
				opacity:[1],
				timing: {delay:100, duration: 500, ease: easePolyOut}
			}}
		>
			{({x,y,opacity})=>{
				return(
						<div className={styles.player} style={{
							opacity,
							transform: `translate(500px,201px)`
						}}>
						Игрок
						</div>
					)
			}}
		</Animate>
    )
	render(){
		return (
				<div className={styles.text}>
					{this.animateNumber()}
					{this.animateSecond()}
				</div>
			)
	}
}
