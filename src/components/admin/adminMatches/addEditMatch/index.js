import React, {Component} from 'react';
import FormField from '../../../ui/formField';
import { validate, firebaseIterator } from '../../../ui/helpers';
import AdminLayout from '../../../../hoc/AdminLayout';
import {firebaseTeams, firebaseDB, firebaseMatches} from '../../../../firebase.js';
import styles from './addEditMatch.css';

class addEditMatch extends Component {
	state = {
		matchId: '',
		formType: '',
		formError: false,
		formSuccess: '',
		teams: [],
		formdata: {
			date: {
				element: 'input',
				value: '',
				config: {
					label: 'Дата события',
					name: 'dateInput',
					type: 'date'
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: '',
				showLabel: true
			},
			local: {
				element: 'select',
				value: '',
				config: {
					label: 'Выбор домашней команды',
					name: 'selectLocal',
					type: 'select',
					options: []
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: '',
				showLabel: true
			},
			resultLocal:  {
				element: 'input',
				value: '',
				config: {
					label: 'Колличество забитых голов домашней командой',
					name: 'resultLocal',
					type: 'text'
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: '',
				showLabel: true
			},
			away: {
				element: 'select',
				value: '',
				config: {
					label: 'Выбор гостевой команды',
					name: 'selectAway',
					type: 'select',
					options: []
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: '',
				showLabel: true
			},
			resultAway: {
				element: 'input',
				value: '',
				config: {
					label: 'Колличество забитых голов гостевой командой',
					name: 'resultAway',
					type: 'text'
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: '',
				showLabel: true
			},
			referee: {
				element: 'input',
				value: '',
				config: {
					label: 'Судья матча',
					name: 'refereeInput',
					type: 'text'
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: '',
				showLabel: true
			},
			stadium: {
				element: 'input',
				value: '',
				config: {
					label: 'Стадион',
					name: 'stadiumInput',
					type: 'text'
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: '',
				showLabel: true
			},
			final: {
				element: 'select',
				value: '',
				config: {
					label: 'Матч сыгран?',
					name: 'selectPlayed',
					type: 'select',
					options: [
						{key: 'Yes', value: 'Yes'},
						{key: 'No', value: 'No'}
					]
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: '',
				showLabel: true
			}

		}
	}
	updateFields(match, teamOptions, teams, type, matchId){
		const newFormdata = { ...this.state.formdata };
		for(let key in newFormdata){
			if(match){
				newFormdata[key].value = match[key];
				newFormdata[key].valid = true;
			
			}
			if(key === 'local' || key === 'away'){
				newFormdata[key].config.options = teamOptions;
				
			}
		}
		this.setState({
			matchId,
			formType: type,
			formdata: newFormdata,
			teams
		})
	};
	updateForm(element){
		const newFormdata = {...this.state.formdata};
		const newElement = {...newFormdata[element.id]};
		newElement.value = element.event.target.value;
		
		
		
		newFormdata[element.id] = newElement;
		
		this.setState({
			formError: false,
			formdata: newFormdata
		})
	}
	componentDidMount(){
		const matchId = this.props.match.params.id;
		const getTeams = (match, type) => {
			firebaseTeams.once('value').then((snapshot)=>{
				const teams = firebaseIterator(snapshot);
				const teamOptions = [];
				snapshot.forEach((childSnapshot)=>{
					teamOptions.push({
						key: childSnapshot.val().shortName,
						value: childSnapshot.val().shortName
					});
				
				})
				this.updateFields(match, teamOptions, teams, type, matchId)
			})
		}
		if(!matchId){
			getTeams(false, 'Добавить матч');
		} else {
			firebaseDB.ref(`matches/${matchId}`).once('value')
			.then( (snapshot) => {
				const match = snapshot.val();
				//console.log(match);
				getTeams(match, "Редактирование матча")
			})
		}
	}
	submitForm(event){
		event.preventDefault();
		let formIsValid = true;
		let dataToSubmit = {};
		
		
		for(let key in this.state.formdata){
			dataToSubmit[key] = this.state.formdata[key].value;
		}
		this.state.teams.forEach((team)=>{
			if(team.shortName === dataToSubmit.local){
				dataToSubmit['localThmb'] = team.thmb;
			}
			if(team.shortName === dataToSubmit.away){
				dataToSubmit['awayThmb'] = team.thmb;
			}
		})
		if(formIsValid){
			if(this.state.formType === 'Редактирование матча'){
				console.log(dataToSubmit);
				firebaseDB.ref(`matches/${this.state.matchId}`)
				.update(dataToSubmit).then(()=>{
					this.successForm('Обновление завершено');
				}).catch((e)=>{
					this.setState({
						formError: true
					})
				})
			} else {
				firebaseMatches.push(dataToSubmit).then(()=>{
					this.props.history.push('/admin-matches');
				}).catch((e)=>{
					this.setState({

					})
				})
			}
		}
		else {
			this.setState({
				formError: true
			})
		}
	}
	successForm(message){
		this.setState({
			formSuccess: message
		});
		setTimeout(()=>{
			this.setState({
				formSuccess: ''
			})
		},3000)
	}
	render(){
		
		return (
			<AdminLayout>
				<div className={styles.edit}>
					<h2>{this.state.formType}</h2>
					<div>
						<form onSubmit={(event) => this.submitForm(event)}>
								
								<div className={styles.middle}>
									<FormField
										id={'date'}
										formdata={this.state.formdata.date}
										change={(element)=>this.updateForm(element)}
									></FormField>
								</div>

								<div className={styles.wrapper}>
									<div className={styles.left}>
										
										<FormField
											id={'local'}
											formdata={this.state.formdata.local}
											change={(element) => this.updateForm(element)}	
										></FormField>
									</div>
									<div className={styles.right}>
										
										<FormField
											id={'resultLocal'}
											formdata={this.state.formdata.resultLocal}
											change={(element)=>this.updateForm(element)}
										></FormField>
									</div>
								</div>
							
								
								<div className={styles.wrapper}>
									<div className={styles.left}>
										<FormField
											id={'away'}
											formdata={this.state.formdata.away}
											change={(element)=>this.updateForm(element)}
										></FormField>
										
									</div>
									<div className={styles.right}>
										<FormField
											id={'resultAway'}
											formdata={this.state.formdata.resultAway}
											change={(element)=>this.updateForm(element)}
										></FormField>
									</div>
								</div>
								
									<div className={styles.middle}>
										<FormField
										id={'referee'}
										formdata={this.state.formdata.referee}
										change={(element)=>this.updateForm(element)}
										></FormField>
									</div>
								
								
									<div className={styles.middle}>
									<FormField
										id={'stadium'}
										formdata={this.state.formdata.stadium}
										change={(element)=>this.updateForm(element)}
									>
									</FormField>
									</div>

									<div className={styles.middle}>	
										<FormField
											id={'final'}
											formdata={this.state.formdata.final}
											change={(element)=>this.updateForm(element)}
										>
										</FormField>
									</div>
									
									<div>{this.state.formSuccess}</div>
									{this.state.formError ?
										<div>Что то пошло не так</div> : ''
									}
									<div>
										<button onClick={(event) => this.submitForm(event)}>
											{this.state.formType}
										</button>
									</div>
									
								

						</form>
					</div>
				</div>
			</AdminLayout>
			)
	}
};

export default addEditMatch;