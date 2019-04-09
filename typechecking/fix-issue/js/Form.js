'use strict';

const Form = props => {
	return (
		<div className="col-md-5 offset-md-4">
			<h1 className="text-center">Обновления профиля</h1>
			<hr />
			<form onSubmit={props.handleSubmit}>
				<div className="form-group">
					<label>Email*</label>
					<input
						type="email"
						className="form-control"
						name="email"
						onChange={props.handleChange}
						value={props.email}
						required={true}
					/>
				</div>
				<div className="form-group">
					<label>Имя</label>
					<input
						type="text"
						className="form-control"
						name="first_name"
						onChange={props.handleChange}
						value={props.first_name}
					/>
				</div>
				<div className="form-group">
					<label>Фамилия</label>
					<input
						type="text"
						className="form-control"
						name="last_name"
						onChange={props.handleChange}
						value={props.last_name}
					/>
				</div>
				<div className="form-group">
					<label>Возраст*</label>
					<input
						type="number"
						className="form-control"
						name="age"
						onChange={props.handleChange}
						value={props.age}
						required={true}
					/>
				</div>
				<div className="form-group">
					<label>Псевдоним</label>
					<input
						type="text"
						className="form-control"
						name="nickname"
						onChange={props.handleChange}
						value={props.nickname}
					/>
				</div>
				<div className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="isMarried"
						name="is_married"
						onChange={props.handleChange}
						checked={props.is_married}
					/>
					<label className="form-check-label" htmlFor="isMarried">
						Женат
					</label>
				</div>
				<button type="submit" className="btn btn-primary mt-2 float-right">
					Обновить
				</button>
			</form>
		</div>
	);
};

const emailPropType = (props, propName, componentName) => {
	let email = props[propName];
	let isEmail = typeof email === 'string' && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
	if (!isEmail) {
		return new Error(
			`Неверный параметр ${propName} в компоненте${componentName}: параметр должен быть адресом электронной почты`
		);
	}
	return null;
};

const agePropType = (props, propName, componentName) => {
	let age = props[propName];
	let isAge = (typeof age === 'number' && (age > 0));
	if (!isAge) {
		return new Error(
			`Неверный параметр ${propName} в компоненте ${componentName}: параметр должен быть возрастом больше нуля`
		);
	}
	return null;
};

const createChainableTypeChecker = validate => {
	const checkType = (isRequired, props, propName, componentName, component) => {
  if (props[propName] === null) {
		if (isRequired) {
			return new Error(`Обязательный атрибут ${propName} не был передан компоненту ${componentName}`);
		}
		return null;
	} else {
		return validate(props, propName, componentName, component);
  }
}
	let chainedCheckType = checkType.bind(null, false);
	chainedCheckType.isRequired = checkType.bind(null, true);
	return chainedCheckType;
}

const emailValidator = createChainableTypeChecker(emailPropType);
const ageValidator = createChainableTypeChecker(agePropType);


Form.propTypes = {
	handleSubmit: PropTypes.func,
	handleChange: PropTypes.func,
	email: emailValidator.isRequired,
	first_name: PropTypes.string,
	last_name: PropTypes.string,
    age: ageValidator.isRequired,
    nickname: PropTypes.string,
	is_married: PropTypes.bool
};

Form.defaultProps = {
  email: 'roman@gmail.com',
  first_name: 'Роман',
  last_name: 'Петров',
  age: 30,
  nickname: 'nick',
  is_married: true
};
