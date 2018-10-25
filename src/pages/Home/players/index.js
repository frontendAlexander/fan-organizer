import React, { Component } from 'react';
import { Tag } from '../../../components/ui/helpers';
import Reveal from 'react-reveal/Reveal';
import HomeCards from './cards';

import styles from './players.css'

class Players extends Component {
	state = {
		show: false
	} 
	render(){
		return (
			<div className={styles.newcomers} style={{background:'#ffffff'}}>
				<Reveal 
					fraction={0.7}
					onReveal={ ()=> {
						this.setState({
							show: true
						})
				}}>
				<div className={styles.players}>
					<div className={styles.title}>
						<Tag
							bck="#0e1731"
							size="50px"
							color="#ffffff"
								add={{
									display:'inline-block',
									marginBottom:'20px'}}
						>
						Новые игроки
						</Tag>
					</div>
					<div className={styles.cards}>
						<HomeCards
									show={this.state.show}
								/>
					</div>
					<img className={styles.bck} src="/photo-umbro-cska.jpg" alt="Изображение игровой формы" style={{width:'500px', height: '500px'}}/>
				</div>
			</Reveal>
			</div>
		)
	}
}

export default Players;


