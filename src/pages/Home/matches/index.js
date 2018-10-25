import React from 'react';
import styles from './matches.css';
import { Tag } from '../../../components/ui/helper';
import Blocks from './Blocks';

export const Matches = (props) => {
    return (
		<div>
			<h3 className={styles.title}>Матчи команды</h3>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Tag 
						bck="#0e1731"
						size="30px"
						color="#ffffff"

					>
							<Blocks/>
						</Tag>
						
				</div>
			</div>
		</div>
    )
};

export default Matches;
