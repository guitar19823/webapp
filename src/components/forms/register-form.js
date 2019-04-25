import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import { FormErrors } from '../errors';
import Success from '../success';
import { actionRegister } from '../../actions/autorization';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numberValue: '',
			email: '',
    	password: '',
	    formErrors: {
	    	name: '',
	    	email: '',
	    	password: '',
	    	checkbox: ''
	    },
	    nameValid: false,
	    emailValid: false,
	    passwordValid: false,
	    checkboxChecked: false,
	    formValid: false
		};
	}

	formHandelSubmit(e) {
		e.preventDefault();

		const name = this.nameInput;
		const email = this.emailInput;
		const phone = this.phoneInput;
		const country = this.countryInput;
		const city = this.cityInput;
		const mobileOs = this.mobileOsInput;
		const password = this.passwordInput;
		const checkbox = this.checkboxInput;

		let fieldValidationErrors = this.state.formErrors;
	  let nameValid = this.state.nameValid;
	  let emailValid = this.state.emailValid;
	  let passwordValid = this.state.passwordValid;
	  let checkboxChecked = this.state.checkboxChecked;

		nameValid = name.value.length >= 2;
    fieldValidationErrors.name = nameValid ? '' : 'Имя не менее 2-х символов';

		emailValid = email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    fieldValidationErrors.email = emailValid ? '' : 'Email не корректный';

		passwordValid = password.value.length >= 6;
    fieldValidationErrors.password = passwordValid ? '' : 'Пароль не менее 6-и символов';

		checkboxChecked = checkbox.checked;
    fieldValidationErrors.checkbox = checkboxChecked ? '' : 'Подтвердите что вы не робот';

		if (nameValid && emailValid && passwordValid && checkboxChecked) {
			this.props.register({
				"name": name.value,
				"email": email.value,
				"phone": phone.value,
				"country": country.value,
				"city": city.value,
				"mobile_os": mobileOs.value,
				"password": password.value
			});

			name.value = '';
			email.value = '';
			phone.value = '';
			password.value = '';
			checkbox.checked = false;
		}
	  
	  this.setState(
	  	{
	  		formErrors: fieldValidationErrors,
	  		nameValid: nameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
        checkboxChecked: checkboxChecked,
        formValid: nameValid && emailValid && passwordValid && checkboxChecked
      }
    );
	}

	errorClass(error) {
   	return(error ? 'has-error' : null);
	}

	handleChangeNumber(e) {
    this.setState({
      numberValue: e.target.value
    });
  }

  beforeMaskedValueChange(newState, oldState, userInput) {
    const { value } = newState;
    const selection = newState.selection;
    const cursorPosition = selection ? selection.start : null;

    if (value.endsWith('-') && userInput !== '-' && !this.state.value.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = {start: cursorPosition, end: cursorPosition};
      }

      value = value.slice(0, -1);
    }
 
    return {
      value,
      selection
    };
  }

	render() {

		if (this.props.isLogin) {
      return <Redirect to='/privat' />;
    }

		const { formErrors, formValid, message } = this.state;

		const success = formValid ? <Success  message={this.props.message} /> : null;

		return (
				<form onSubmit={this.formHandelSubmit.bind(this)} noValidate>
					<div className="inputs-wrapper">
						<div>
							<label htmlFor="text">Ф.И.О.</label>
							<input
								type="text"
								name="name"
								placeholder="Иванов Петр Сидрович *"
								className={this.errorClass(formErrors.name)}
								ref={input => this.nameInput = input}
							/>
						</div>

						<div>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								placeholder="abra-kadabra@xmail.tk *"
								className={this.errorClass(formErrors.email)}
								ref={input => this.emailInput = input}
							/>
						</div>

						<div>
							<label htmlFor="signup-phone">Телефон</label>
							<InputMask
								type="phone"
								mask="+9 (999) 999-99-99"
								maskChar={'_'}
								value={this.state.value}
								onChange={this.handleChangeNumber.bind(this)}
								beforeMaskedValueChange={this.beforeMaskedValueChange.bind(this)}
								id="signup-phone"
								placeholder="+7 (999) 999-99-99"
								ref={input => this.phoneInput = input}
							/>
						</div>

						<div>
							<label htmlFor="signup-country">Страна</label>
							<select id="signup-country" ref={input => this.countryInput = input}>
								<option>Австралия</option>
								<option>Россия</option>
								<option>США</option>
							</select>
						</div>

						<div>
							<label htmlFor="signup-city">Город</label>
							<select id="signup-city" ref={input => this.cityInput = input}>
								<option>Сидней</option>
								<option>Москва</option>
								<option>Вашигдон</option>
							</select>
						</div>

						<div>
							<label htmlFor="signup-os-mobile">ОС мобильного телефона</label>
							<select id="signup-os-mobile" ref={input => this.mobileOsInput = input}>
								<option>android</option>
								<option>iOS</option>
								<option>windows mobile</option>
							</select>
						</div>

						<div>
							<label htmlFor="password">Пароль</label>
							<input
								type="password"
								name="password"
								placeholder="abra-kadabra *"
								className={this.errorClass(formErrors.password)}
							 	ref={input => this.passwordInput = input}
							/>
						</div>
					</div>

					<label>
						<input
							type="checkbox"
							onChange={this.handleUserInput}
							ref={input => this.checkboxInput = input}
						/>
						Я не робот
					</label>
					
					{success}

					<FormErrors formErrors={formErrors} />

					<input type="submit" value="Регистрация" />
				</form>
		);
	}
};

const mapStateToProps = (state) => (
  {
    message: state.autorization.message
  }
);

const mapDispatchToProps = (dispatch) => (
  {
	  register: (data) => {
    	dispatch(actionRegister(data))
	  }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);