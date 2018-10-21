import React from 'react';
import styles from './playerCard.css'

const PlayerCard = (props) => {
	return (
			<div className={styles.wrapper}>
				<div className={styles.thmb} style={{background: `#f2f9ff url(${props.bck}) space`}}>
					
				</div>
				<div className={styles.info}>
					<div className={styles.number}>
						{props.number}
					</div>
					<div className={styles.name}>
						{props.name}
						{props.lastname}
					</div>
				</div>
			</div>
		)
};

export default PlayerCard;