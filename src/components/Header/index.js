import React,{ Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { CSKALogo } from '../ui/icons';

class Header extends Component {
	render(){
		return (
			<div>
			<AppBar
				styles={{
                    position: 'fixed',
                    backgroundColor:'#120484',
                    boxShadow: 'none',
                    padding: '10px 0',
                    borderBottom: '2px solid #00285e'
                }}
			>
				<ToolBar
				styles={{display:'flex'}}
				>
					<CSKALogo
                                height='40px'
                                width='40px'
                                link={true}
                                linkTo='/'
							/>
					<Link
						to="/the-team"
					>
						<Button
							color="inherit"
						>
							Команда
						</Button>
					</Link>
					<Link
						to="/the-matches"
					>
						<Button
							color="inherit"
						>
							Матчи
						</Button>
					</Link>
					
				</ToolBar>
			</AppBar>
			</div>
			)
	}
};

export default Header;