import React, {Component} from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import styles from './Stripes.css'

class Stripes extends Component {
	state = {
		stripes: [
			{
				background: '#c90814',
                left: 0,
                right: 0,
				rotate: 180,
				bottom: 0,
				delay: 200
			},
			{
				background: '#120484',
                left: 0,
                right: 0,
				rotate: 180,
				bottom: -297,
				delay: 400
			},
			{
				background: '#c90814',
                left: 0,
                right: 0,
				rotate: 180,
				bottom: -498,
				delay: 500
 			}
		]
	}
	showStripes = () => (
		this.state.stripes.map( (stripe, i) => (
				<Animate
                    key={i}
                    show={true}
                    start={{
                        background: 'red',
                        opacity: 0,
                        left: 0,
                        rotate: 0,
                        bottom: 0
                    }}
                    enter={{
                        background: [stripe.background],
                        timing: {delay:stripe.delay, duration: 200, ease: easePolyOut},
                        opacity: [1],
                        left: [stripe.left],
                        rotate: [stripe.rotate],
                        bottom: [stripe.bottom]
                    }}
                    >
                        { ({background,left,opacity,rotate,bottom}) => {
                            return (
                                        <div className={styles.stripe} style={{
                                            background,
                                            trasnsform: `rotate(${rotate}deg) traslate(${left}px, ${bottom}px)`,
                                            opacity
                                        }}></div>
                                    )
                        } }
                    </Animate>
			))
	)
	render(){
		return (
				<div className={styles.stripes}>
					{this.showStripes()}
				</div>
			)
	}
};

export default Stripes;