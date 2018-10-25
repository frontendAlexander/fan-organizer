import React from 'react';
import styles from './formField.css';

export const FormField = (props) => {
	const showError = (formdata) => {
		let errorMessage = (
			<div className="errorLabel">
			{
				formdata.validation && !formdata.valid ? 
				formdata.validationMessage : null
			}
			</div>
		)
		return errorMessage;
	}
	
	const renderTemplate = ( {formdata, id, change} ) => {
		let formTemplate = null;
		
		switch(formdata.element){
			case('input'):
				formTemplate = (
						<div>
						{formdata.showlabel ? 
							<div className="labelLnputs">
								{formdata.config.label}
							</div>
							: null
						}
							<input
								className={styles.emailInput}
								{...formdata.config}
								value={formdata.value}
								onChange={ event => change( {event, id} )}
							></input>
							{ 
								showError(formdata.element)  }
						</div>
					)
			break;
			
			default:
				formTemplate = null;
		}
		
		return formTemplate;
	}
	
	return (
			<div>
				{renderTemplate(props)}
			</div>
		)
};

export default FormField;

/*
//асситивность поля воода(лейбл, ария)
//и кейс для редактирования   
import React from 'react';
import styles from './formField.css';

export const FormField = (props) => {
	
	
	const renderTemplate = (formdata, id, change) => {
		let formTemplate = null;

		switch(formdata){
			case('input'):
				formTemplate = (
						<div>
						{
							formdata.showlabel ? 
							<div className="labelInputs">
								{formdata.email.config.label}
							</div>
							: null
						}
							<input
								className={styles.input}
								{...formdata}
								value={formdata.email.value} 
								onChange={event => change( {event, id} )}
							>
								
							</input>
						</div>
					)
			break;
			
			default:
				formTemplate = null;
		}
		return formTemplate;
	}
	return (
		<div>
				{renderTemplate()}
		</div>
		)
};
export default FormField;
*/