'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

const bithValidator = (props, propName, componentName) => {
	const value = props[propName];
	const isValid = typeof value === 'string' && /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value) && new Date(value).getTime() < new Date().getTime();
	if (!isValid) {
		return new Error(
			`Неверный параметр ${propName} в компоненте ${componentName}: параметр должен быть датой и меньше текущей`
		);
	}
	return null;
};

const urlValidator = (props, propName, componentName) => {
	const value = props[propName];
	const isValid = typeof value === 'string' && /^https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(value);
	if (!isValid) {
		return new Error(
			`Неверный параметр ${propName} в компоненте ${componentName}: параметр должен быть http*`
		);
	}
	return null;
};


Profile.propTypes = {
  url: urlValidator,
  birthday: bithValidator,
  firs_name: PropTypes.string,
  last_name: PropTypes.string
}

Profile.defaultProps = {
img: './images/profile.jpg',
birthday: '1980-06-03'

}