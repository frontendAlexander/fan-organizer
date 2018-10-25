import React from 'react';
import styles from './matches_blocks.css';

const Matches_block = ( {match} ) => {
	return (
		<div className={styles.block}>
			
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<div className={styles.icon} style={{background:`url(/team_icons/${match.localThmb}.png) center center`, height: '120px', width: '120px'}}>
					<div className={styles.name}>
						{match.local}
					</div>
				</div>
				<div className={styles.result}>
					{match.final ? match.resultLocal : '-'}
				</div>
			</div>
			<div className={styles.date}>
				{match.final ? match.date : `Матч еше не сыгран ${match.date}`}
			</div>
			<div className={styles.right}>
				<div className={styles.icon} style={{background:`url(/team_icons/${match.awayThmb}.png) center center`, height: '120px', width: '120px'}}>
					<div className={styles.name}>
						{match.away}
					</div>
				</div>
				<div className={styles.result}>
					{match.final ? match.resultAway : '-'}
				</div>
			</div>
		</div>
	</div>
	
		)
} 

export default Matches_block;
/*
<div className={styles.bottom}>
						<div className={styles.bottomLeft}>
							<div className={styles.icon} style={{background:`url(/team_icons/${match.awayThmb}.png)`}}>
								<div className={styles.bottonName}>
									{match.away}
								</div>
							</div>
						</div>
						<div className={styles.bottomRight}>
							{match.final ? match.resultAway : '-'}
						</div>
					</div>
*/