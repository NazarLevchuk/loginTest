
import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {

	const [buttonState, setButtonState] = useState(false);
	const [errorEmailBlockState, setEmailErrorBlockState] = useState(true);
	const [errorPasswordBlockState, setPasswordErrorBlockState] = useState(true);



	const handlerBlurEmail = (e) => {
		const rp = /^\+380\d{9}$/;
		const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (!re.test(String(e.target.value).toLowerCase()) && !rp.test(String(e.target.value))) {
			setButtonState(true);
			setEmailErrorBlockState(false);
		} else {
			setButtonState(false);
			setEmailErrorBlockState(true);
		}
	}
	const handlerChangeEmail = (e) => {
		const rp = /^\+380\d{9}$/;
		const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (!re.test(String(e.target.value).toLowerCase()) && !rp.test(String(e.target.value))) {
			setButtonState(true);
		} else {
			setButtonState(false);
			setEmailErrorBlockState(true);
		};
	}



	const handlerBlurPass = (e) => {
		const rpas = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
		if (!rpas.test(String(e.target.value))) {
			setButtonState(true);
			setPasswordErrorBlockState(false);
		} else {
			setButtonState(false);
			setEmailErrorBlockState(true);
		}
	}
	const handlerChangePass = (e) => {
		const rpas = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
		if (!rpas.test(String(e.target.value))) {
			setButtonState(true);
		} else {
			setButtonState(false);
			setPasswordErrorBlockState(true);
		};
	}



	const ErrorBlock = (e) => {

		return (
			<div className='error_block'>Incorrect {e}</div>
		)
	}

	return (
		<div className="App">
			<header className="App_header">
				<form className='form_container'>
					<div className='input_container'>{errorEmailBlockState ? null : ErrorBlock()}<input onBlur={handlerBlurEmail} onChange={handlerChangeEmail} /* value={email} */ required name='email' type='text' placeholder='E-mail or Phone number...'></input></div>
					<div className='input_container'>{errorPasswordBlockState ? null : ErrorBlock()}<input onBlur={handlerBlurPass} onChange={handlerChangePass} /* value={password} */ required name='password' type='password' placeholder='Password....'></input></div>
					<button disabled={buttonState} type='submit'>Enter</button>
				</form>
			</header>
		</div>
	);
}

