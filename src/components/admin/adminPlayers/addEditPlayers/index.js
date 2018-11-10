import React, { Component } from 'react';
import FormField from '../../../ui/formField';
import AdminLayout from '../../../../hoc/AdminLayout';
import { firebasePlayers, firebase, firebaseDB } from '../../../../firebase';
import { firebaseIterator, validate } from '../../../ui/helpers';
import styles from './addEditPlayers.css';

class AddEditPlayers extends Component {
	state = {
		playerId:'',
		formType:'',
		formError:false,
		formSuccess:'',
		defaultImg:'',
		formdata:{
			name: {
				element: 'input',
				value: '',
				config: {
					label: 'Имя игрока',
					name: 'name-input',
					type: 'text'
				},
				validation: {
					required: true,
				},
				valid: false,
				validationMessage: '',
				showlabel: true
			},
			lastname: {
				element: 'input',
				value: '',
				config: {
					label: 'Фамилия игрока',
					name: 'lastname-input',
					type: 'text'
				},
				validation: {
					required: true,
				},
				valid: false,
				validationMessage: '',
				showlabel: true
			},
			number: {
				element: 'input',
				value: '',
				config: {
					label: 'Номер игрока',
					name: 'number-input',
					type: 'text'
				},
				validation: {
					required: true,
				},
				valid: false,
				validationMessage: '',
				showlabel: true
			},
			position: {
				element: 'select',
				value: '',
				config: {
					label: 'Позиция игрока',
					name: 'position-select',
					type: 'select',
					options: [
						{
							key: 'Keeper', value: 'Keeper'
						},
						{
							key: 'Defence', value: 'Defence'	
						},
						{
							key: 'Midfield', value: 'Midfield'
						},
						{
							key: 'Striker', value: 'Striker'
						},
						{
							key: 'Any', value: 'Any'
						}
						]
				},
				validation: {
					required: true,
				},
				valid: false,
				validationMessage: '',
				showlabel: true
			}
	
		}
	}
	updateForm(element, content = ''){
		const newFormdata = {...this.state.formdata};
		const newElement = {...newFormdata[element.id]}
		if(content === ''){
			newElement.value = element.event.target.value;
		} else {
			newElement.value = content;
		}
		
		let validData = validate(newElement);
		newElement.valid = validData[0];
		newElement.validationMessage = validData[1];

		newFormdata[element.id] = newElement;

		this.setState({
			formError: false,
			formdata: newFormdata
		})
	}
	successForm = (message) => {
		this.setState({
			formSuccess: message
		});
		setTimeout(()=>{
			this.setState({
				formSuccess: ''
			})
		},2000)
	}
	submitForm(event){
		event.preventDefault();

		let dataToSubmit = {};
		let formIsValid = true;
		for(let key in this.state.formdata){
			dataToSubmit[key] = this.state.formdata[key].value;
			formIsValid = this.state.formdata[key].valid && formIsValid;
		}
		
		if (formIsValid){
			if(this.state.formType === 'Редактирование игрока'){
				firebaseDB.ref(`players/${this.state.playerId}`)
				.update(dataToSubmit).then(()=>{
					this.successForm('Обновление выполнено');
				}).catch(e=> {
					this.setState({
						formError: true
					})
				})
			}
		} else {
			firebasePlayers.push().then(()=>{
				this.props.history.push('/admin-players')
			}).catch(e=>{
				this.setState({
					formError: true
				})
			})
			
		}
	}
	updateFields = (player,playerId,formType,defaultImg) => {
		const newFormdata = {...this.state.formdata};

		for(let key in newFormdata){
			newFormdata[key].value = player[key];
			newFormdata[key].valid = true;
		}
		this.setState({
			playerId,
			defaultImg,
			formType,
			formdata: newFormdata
		})
	}
	componentDidMount(){
		const playerId = this.props.match.params.id;
		if (!playerId){
			this.setState({
				formType: 'Добавить игрока'
			})
		} else {
			firebaseDB.ref(`players/${playerId}`).once('value')
			.then((snapshot)=>{
				const playerData = snapshot.val();
				firebase.storage().ref('players')
				.child(playerData.image).getDownloadURL()
				.then( url => {
					this.updateFields(playerData, playerId, 'Редактирование игрока', url)
				}).catch(()=>{
					this.updateFields({...playerData, image:''}, playerId, 'Редактирование игрока', '')
				})
			})
		}
	}
	
	render(){
		return (
			<AdminLayout>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>
						{this.state.formType}
					</h2>
					<div>
						<form onSubmit={(event) => this.submitForm(event)}>
							<div className={styles.field}>
								<span>Имя игрока</span>
								<FormField
									id={'name'}
									formdata={this.state.formdata.name}
									change={(element)=>this.updateForm(element)}
								/>
							</div>
							<div className={styles.field}>
								<span>Фамилия</span>
								<FormField
								id={'lastname'}
								formdata={this.state.formdata.lastname}
								change={(element)=>this.updateForm(element)}
							/>
							</div>
							<div className={styles.field}>
								<span>Игровой номер</span>
							<FormField
								id={'number'}
								formdata={this.state.formdata.number}
								change={(element)=>this.updateForm(element)}
							/>
							</div>
							<div className={styles.field}>
								<span>Позиция</span>
							<FormField
								id={'position'}
								formdata={this.state.formdata.position}
								change={(element)=>this.updateForm(element)}
							/>
							</div>
							{this.state.formError ?
							<div className="error-label">
								Что-то пошло не так
							</div> : ''}
							<div className="admin-submit">
								<button onClick={(event)=>this.submitForm(event)}>
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

export default AddEditPlayers;


/*
import React, { Component } from 'react';
import FormField from '../../../ui/formField';
import AdminLayout from '../../../../hoc/AdminLayout';
import { firebasePlayers, firebase, firebaseDB } from '../../../../firebase';
import { firebaseIterator, validate } from '../../../ui/helpers';
import FileUploader from '../../../ui/fileUploader';
import styles from './addEditPlayers.css';

class AddEditPlayers extends Component {
	state = {
		playerId:'',
		formType:'',
		formError:false,
		formSuccess:'',
		defaultImg:'',
		formdata:{
			name: {
				element: 'input',
				value: '',
				config: {
					label: 'Имя игрока',
					name: 'name-input',
					type: 'text'
				},
				validation: {
					required: true,
				},
				valid: false,
				validationMessage: '',
				showlabel: true
			},
			lastname: {
				element: 'input',
				value: '',
				config: {
					label: 'Фамилия игрока',
					name: 'lastname-input',
					type: 'text'
				},
				validation: {
					required: true,
				},
				valid: false,
				validationMessage: '',
				showlabel: true
			},
			number: {
				element: 'input',
				value: '',
				config: {
					label: 'Номер игрока',
					name: 'number-input',
					type: 'text'
				},
				validation: {
					required: true,
				},
				valid: false,
				validationMessage: '',
				showlabel: true
			},
			position: {
				element: 'select',
				value: '',
				config: {
					label: 'Позиция игрока',
					name: 'position-select',
					type: 'select',
					options: [
						{
							key: 'Keeper', value: 'Keeper'
						},
						{
							key: 'Defence', value: 'Defence'	
						},
						{
							key: 'Midfield', value: 'Midfield'
						},
						{
							key: 'Striker', value: 'Striker'
						},
						{
							key: 'Any', value: 'Any'
						}
						]
				},
				validation: {
					required: true,
				},
				valid: false,
				validationMessage: '',
				showlabel: true
			},
			image:{
				element: 'image',
				value: '',
				validation: {
					required: true
				},
				valid: false
			}
	
		}
	}
	updateForm(element, content = ''){
		const newFormdata = {...this.state.formdata};
		const newElement = {...newFormdata[element.id]}
		if(content === ''){
			newElement.value = element.event.target.value;
		} else {
			newElement.value = content;
		}
		
		let validData = validate(newElement);
		newElement.valid = validData[0];
		newElement.validationMessage = validData[1];

		newFormdata[element.id] = newElement;

		this.setState({
			formError: false,
			formdata: newFormdata
		})
	}
	successForm = (message) => {
		this.setState({
			formSuccess: message
		});
		setTimeout(()=>{
			this.setState({
				formSuccess: ''
			})
		},2000)
	}
	submitForm(event){
		event.preventDefault();

		let dataToSubmit = {};
		let formIsValid = true;
		for(let key in this.state.formdata){
			dataToSubmit[key] = this.state.formdata[key].value;
			formIsValid = this.state.formdata[key].valid && formIsValid;
		}
		
		if (formIsValid){
			if(this.state.formType === 'Редактирование игрока'){
				firebaseDB.ref(`players/${this.state.playerId}`)
				.update(dataToSubmit).then(()=>{
					this.successForm('Обновление выполнено');
				}).catch(e=> {
					this.setState({
						formError: true
					})
				})
			}
		} else {
			firebasePlayers.push().then(()=>{
				this.props.history.push('/admin-players')
			}).catch(e=>{
				this.setState({
					formError: true
				})
			})
			
		}
	}
	updateFields = (player,playerId,formType,defaultImg) => {
		const newFormdata = {...this.state.formdata};

		for(let key in newFormdata){
			newFormdata[key].value = player[key];
			newFormdata[key].valid = true;
		}
		this.setState({
			playerId,
			defaultImg,
			formType,
			formdata: newFormdata
		})
	}
	componentDidMount(){
		const playerId = this.props.match.params.id;
		if (!playerId){
			this.setState({
				formType: 'Добавить игрока'
			})
		} else {
			firebaseDB.ref(`players/${playerId}`).once('value')
			.then((snapshot)=>{
				const playerData = snapshot.val();
				firebase.storage().ref('players')
				.child(playerData.image).getDownloadURL()
				.then( url => {
					this.updateFields(playerData, playerId, 'Редактирование игрока', url)
				}).catch(()=>{
					this.updateFields({...playerData, image:''}, playerId, 'Редактирование игрока', '')
				})
			})
		}
	}
	resetImage = () => {
		const newFormdata = {...this.state.formdata};
		newFormdata['image'].value = '';
		newFormdata['image'].value = false;
		this.setState({
			 defaultImg: '',
			 formdata: newFormdata
		})
	}
	storeFilename = (filename) => {
		this.updateForm({id:'image'}, filename)
	}
	render(){
		return (
			<AdminLayout>
				<div className={styles.wrapper}>
					<h2>
						{this.state.formType}
					</h2>
					<div>
						<form onSubmit={(event) => this.submitForm(event)}>
							<FileUploader
								dir="players"
								tag={"Фото игрока"}
								defaultImg={this.state.defaultImg}
								defaultImgName={this.state.formdata.image.value}
								resetImage={()=>this.resetImage()}
								fileName={(filename)=>this.storeFilename(filename)}
							/>
							<FormField
								id={'name'}
								formdata={this.state.formdata.name}
								change={(element)=>this.updateForm(element)}
							/>
							<FormField
								id={'lastname'}
								formdata={this.state.formdata.lastname}
								change={(element)=>this.updateForm(element)}
							/>
							<FormField
								id={'number'}
								formdata={this.state.formdata.number}
								change={(element)=>this.updateForm(element)}
							/>
							<FormField
								id={'position'}
								formdata={this.state.formdata.position}
								change={(element)=>this.updateForm(element)}
							/>
							{this.state.formError ?
							<div className="error-label">
								Что-то пошло не так
							</div> : ''}
							<div className="admin-submit">
								<button onClick={(event)=>this.submitForm(event)}>
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

export default AddEditPlayers;
*/