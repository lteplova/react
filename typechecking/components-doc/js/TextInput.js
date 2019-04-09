'use strict';

const TextInput = props => {
 // console.log(props);
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required}/>
    </div>
  )
};

TextInput.propTypes = {
 label:  PropTypes.oneOf(
  ['Email', 'Имя', 'Фамилия', 'Пароль', 'Пол']
  ),
 type: PropTypes.string,
 name: PropTypes.string,
 handleChange: PropTypes.func,
 value:PropTypes.string,
 required: PropTypes.bool
}

