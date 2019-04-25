import React, { Component } from 'react';
import { FormErrors } from "../errors";
import Success from "../success";
import { connect } from 'react-redux';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
    	password: '',
	    formErrors: {email: '', password: '', checkbox: ''},
	    emailValid: false,
	    passwordValid: false,
	    checkboxChecked: false,
	    formValid: false
		};
	}

	formHandelSubmit(e) {
		e.preventDefault();

		const email = this.emailInput;
		const password = this.passwordInput;
		const checkbox = this.checkboxInput;

		let fieldValidationErrors = this.state.formErrors;
	  let emailValid = this.state.emailValid;
	  let passwordValid = this.state.passwordValid;
	  let checkboxChecked = this.state.checkboxChecked;

		emailValid = email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    fieldValidationErrors.email = emailValid ? '' : 'Email не корректный';

		passwordValid = password.value.length >= 6;
    fieldValidationErrors.password = passwordValid ? '' : 'Пароль не менее 6-и cимволов';

		checkboxChecked = checkbox.checked;
    fieldValidationErrors.checkbox = checkboxChecked ? '' : 'Подтвердите что вы не робот';

		if (emailValid && passwordValid && checkboxChecked) {
			this.props.formHandelSubmit(email.value, password.value);

			email.value = '';
			password.value = '';
			checkbox.checked = false;
		}
	  
	  this.setState(
	  	{
	  		formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        checkboxChecked: checkboxChecked,
        formValid: emailValid && passwordValid && checkboxChecked
      }
    );
	}

	errorClass(error) {
   	return(error ? 'has-error' : null);
	}

	render() {
		const { formErrors, formValid } = this.state;
		const { formHandelSubmit, emailLabel, passLabel, submitValue, message } = this.props;
		const success = formValid ? <Success message={message} /> : null;

		return (
			<form onSubmit={this.formHandelSubmit.bind(this)} noValidate>
				<label htmlFor="email">{emailLabel}</label>
				<input
					type="email"
					name="email"
					placeholder="abra-kadabra@xmail.tk *"
					className={this.errorClass(formErrors.email)}
					ref={input => this.emailInput = input}
				/>

				<label htmlFor="password">{passLabel}</label>
				<input
					type="password"
					name="password"
					placeholder="abra-kadabra *"
					className={this.errorClass(formErrors.password)}
					ref={input => this.passwordInput = input}
				/>

				<label>
					<input
						type="checkbox"
						name="checkbox"
						ref={input => this.checkboxInput = input}
					/>
					Я не робот
				</label>
				
				{success}

				<FormErrors formErrors={formErrors} />

				<input
					type="submit"
					value={submitValue}
				/>
			</form>
		);
	}
};

const mapStateToProps = (state) => (
  {
    message: state.autorization.message
  }
);

export default connect(mapStateToProps)(Form);