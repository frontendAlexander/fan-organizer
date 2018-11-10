import React from 'react';
import { Link } from 'react-router-dom';

export const validate = (element) => {
	let error = [true, ''];
	if(element.validation.email){
		const valid = /\S+@\S+\.\S+/.test(element.value);
		const message = `${!valid ? 'Введите правильный почтовый ящик' : ''}`;
		error = !valid ? [valid, message] : error;
	}
	if (element.validation.required){
		const valid = element.value.trim() !== '';
		const message = `${!valid ? 'Это поле обязательно' : ''}`;
		error = !valid ? [valid, message] : error;
	} 
	return error;
}

export const reverseArray = (actualArray) => {
	let reversedArray = [];
	for(var i = actualArray.length - 1; i >= 0; --i){
		reversedArray.push(actualArray[i]);
	}
	return reversedArray;

};
export const firebaseIterator = (snapshot) => {
	const data = [];
	snapshot.forEach( (childSnapshot) => {
		data.push({
			...childSnapshot.val(),
			id: childSnapshot.key
		})
	});
	return data;
}

export const Tag = (props) => {
	const template = (
        <div style={{
			background:props.bck, 
			fontSize: props.size, 
			color: props.color,
			padding:'5px 10px',
			display:'inline-block',
			fontFamily:'Roboto',
			...props.color
		}}>
		{props.children}
		</div>
    )
		

	if (props.link){
		return (<Link to={props.linkto}>{template}</Link>)
	} else {
		return template;
	}
};