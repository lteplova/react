const TextRenderLine = ({value, onChange}) => {
	const handlerChange = (event) => onChange(event.target.value);
	
	return (
		<div className="type-text">
			<textarea name="text" id="font-text" cols="30" rows="2" onChange={handlerChange.bind(this)} placeholder="Введите текст для футболки">{value}</textarea>
		</div>
	);
};
