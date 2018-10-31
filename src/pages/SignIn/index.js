import React, { Component } from 'react';
import FormField from '../../components/ui/formField';
import { validate } from '../../components/ui/helpers';
import { firebase, firebasePromotions } from '../../firebase';
import styles from './SignIn.css';

class SignIn extends Component {
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

			},
			password: {
				element: 'input',
				value: '',
				config: {
					name: 'passwordInput',
					type: 'password',
					placeholder: 'Введите свой пароль'
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: '' 
			}
		}
	}
	submitForm(event){
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;
        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
        //хардкод formIsValid
        if (dataToSubmit.email === "admin@cska" && dataToSubmit.password === "123"){
            console.log('Вы вошли в систему');
        } else {
            this.setState({
                formError: true
            })
        }
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
			<div className={styles.container}>
				<div className={styles.wrapper} style={ {margin:'100px'} }>
					<form onSubmit={(event)=>this.submitForm(event)}>
						<h1>Пожалуйста войдите в систему!</h1>
                            <div className="inputs">
                                <FormField 
                                    id={'email'} 
                                    formdata={this.state.formdata.email}
                                    change={(element) => this.updateForm(element)}
                                />
                                <FormField 
                                    id={'password'} 
                                    formdata={this.state.formdata.password}
                                    change={(element) => this.updateForm(element)}
                                />
                                {this.state.formError ? 
                                    <div className="error-label">Что-то пошло не так, попробуйте еше раз!</div> : null }
                                <button onCLick={(event)=>this.submitForm(event)}>Log in</button>
                            </div>
                    </form>
				</div>
			</div>
		)
	}
};

export default SignIn;