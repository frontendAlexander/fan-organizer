import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../../../components/ui/formField';
import {validate} from '../../../../components/ui/helpers';


import { firebasePromotions } from '../../../../firebase';

import styles from './Enroll.css';

export default class Enroll extends Component {
	state = {
		formError: false,
		formSucces: '',
		formdata: {
			email: {
				element: 'input',
				value: '',
				config: {
					name: 'emailInput',
					type: 'email',
					placeholder: 'Введите свой почтовой ящик'
				},
				validation: {
					required: true,
					email: true
				},
				valid: false,
				validationMessage: '' 

			}
		}
	}
	submitForm(event){
		event.preventDefault();
		console.log("Форма отправлена" + event);
		let dataToSubmit = {};
		let formIsValid = true;
		for(let key in this.state.formdata){
			dataToSubmit[key] = this.state.formdata[key].value;
			console.log("Итерации по данным окончены " + dataToSubmit[key]);
			formIsValid = this.state.formdata[key].valid && formIsValid;
		}
		if (formIsValid){
			firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once("value")
			.then((snapshot)=>{
				if(snapshot.val() === null){
					firebasePromotions.push(dataToSubmit);
					this.resetFormSuccess(true)
				} else {
					this.resetFormSuccess(false)
				}
			})
			
		} else {
			this.setState({
				formError: true
			})
		}
	}
	resetFormSuccess(type){
		const newFormdata = {...this.state.formdata};
		 for (let key in newFormdata){
		 	newFormdata[key].value = '';

		 	newFormdata[key].valid = false;

		 	newFormdata[key].validationMessage= '';
		 }
		 this.setState({
		 	formError: false,
		 	formdata: newFormdata,
		 	formSucces: type ? 'Подписка оформлена!' : 'Вы уже подписаны.'
		 });
		 this.successMessage();

	}
	successMessage(){
		setTimeout( ()=> {
			this.setState({
				formSucces:''
			})
		},2000)
	}
	updateForm(element){
		const newFormdata = {...this.state.formdata};
		const newElement = {...newFormdata[element.id]}
		
		newElement.value = element.event.target.value;
		console.log(newElement.value)
		let validData = validate(newElement);
		newElement.valid = validData[0];
		newElement.validationMessage = validData[1];

		newFormdata[element.id] = newElement;

		this.setState({
			formError: false,
			formdata: newFormdata
		})
	}
	render(){
		return (
			<Fade>
				<div className={styles.wrapper}>
					<form onSubmit={ (event) => { this.submitForm(event) } }>
                        <div className={styles.title}>
                            Введите свой почтовый ящик
                        </div>
                        <div className={styles.input}>
							<div className={styles.inputText}>
							<FormField 
									id={'email'} 
									formdata={this.state.formdata.email}
									change={ (element) => this.updateForm(element) }
							/>
                            </div>
                            
                            {this.state.formError ? <div className={styles.label}>Что-то пошло не так, попробуйте еше раз!</div> : null}
                            
                            <div className={styles.label}>
                                {this.state.formSuccess}
                            </div>
                            <button className={styles.btn} onClick={ (event) => this.submitForm(event) }>Зарегистрироваться</button>
                            <div className={styles.discl}>
                                Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. 
                                Задача организации, в особенности же постоянный количественный рост и сфера нашей активности играет важную роль в формировании систем массового участия. 
                                Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки новых предложений. 
                                Товарищи! рамки и место обучения кадров способствует подготовки и реализации форм развития. 
                                Равным образом новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. 
                            </div>
                        </div>
				</form>
				</div>
			</Fade> 
        )
	}
} 
