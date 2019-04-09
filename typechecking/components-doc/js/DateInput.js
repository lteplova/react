'use strict';

const DateInput = props => {
	return (
		<div className="form-group">
			<label>{props.label}</label>
			<input
				type="text"
				className="form-control"
				name={props.name}
				onChange={props.onChange}
				value={props.value}
				required={props.required}
				placeholder="YYYY-MM-DD"
			/>
		</div>
	);
};

const birthdayPropType = (props, propName, componentName) => {
	const value = props[propName];
	const isValid = typeof value === 'string' && /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value);
	if (!!value.length && !isValid) {
		return new Error(
			`Неверный параметр ${propName} в компоненте ${componentName}: параметр должен быть датой`
		);
	}
	return null;
};

DateInput.propTypes = {
	handleChange: PropTypes.func,
	label: PropTypes.string,
	name: PropTypes.string,
	value: birthdayPropType
};

const date = new Date();
const month = ((date.getMonth()+1) <= 9 ) ?  "0" + (date.getMonth()+1) : date.getMonth()+1 
const day = ((date.getDate() <= 9)) ? "0" + date.getDate(): date.getDate();
const today = `${date.getFullYear()}-${month}-${day}`;

DateInput.defaultProps = {
  label: "День Рождения",
  name:  "birthday",
  value: today
};
