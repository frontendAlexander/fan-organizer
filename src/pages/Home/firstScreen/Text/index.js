import React, {Component} from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedPlayer from '../../../../resources/images/photo-cska-talisman2.png';
import styles from './Text.css';


export default class Text extends Component {
	
	animateText = () => (
		<Animate 
			show={true}
			start={{
				opacity:0,
				rotate:0
			}}
			enter={{
				opacity:[3],
				rotate:[360],
				timing: {duration:1000, easy:easePolyOut}
			}}
		>
			{( {opacity,rotate} )=>{
				return(
						<div style={{
							opacity,
							margin: '400px 0 -345px auto',
							fontSize: '2rem',
							transform: `translate(0px,130px) rotate(${rotate}deg)`
						}}>
							<h2 className={styles.special}>
								Только клуб один - в сердце навсегда!
							</h2>
						</div>
					)
			}}
		</Animate>
    )
	
	animateHorse = () => (
		<Animate 
			show={true}
			start={{
				opacity:0
				
				
			}}
			enter={{
				opacity:[3],
				
				
				timing: {delay:3000, duration:2000, easy:easePolyOut}
			}}
		>
			{( {x,y,opacity} )=>{
				return(
						<div className={styles.horse} style={{
							opacity,
							background: `url(${FeaturedPlayer})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							transform: `translate(${x},${y})`
						}}>
							
						</div>
					)
			}}
		</Animate>
    )
	
	render(){
		return (
			<div className={styles.container}>
				
					{this.animateText()}
					{this.animateHorse()}
				
			</div>
			)
	}
}
