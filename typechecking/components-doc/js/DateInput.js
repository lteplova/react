'use strict';

const DateInput = props => {
	console.log(props);
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

DateInput.propTypes = {
	handleChange: PropTypes.func,

	label: PropTypes.oneOf(["День Рождения"]),
	name: PropTypes.string,
	value: PropTypes.string,
};

DateInput.defaultProps = {
  label: "День Рождения",
  name:  "birthday",
  //handleChange: new Date (year, month, date),
  //value: new Date (year, month, date),

};

// let data = new Date ();
// //data1 =  getTime(data);
// console.log(data);

let date = new Date;
let year = date.getFullYear();
let month = ((date.getMonth()+1) <= 9 ) ?  "0" + (date.getMonth()+1) : date.getMonth()+1 
let day = ((date.getDate() <= 9)) ? "0" + date.getDate(): date.getDate();
//let today = year + "-" month + "-" day;

  console.log(today);