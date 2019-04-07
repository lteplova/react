const FontSelector = ({ fonts, selectedFont, onSelect }) => {

  const handleCheck = (event) => {
      onSelect(JSON.parse(event.target.value));
  };

  const fontItems = fonts.map((item) => {
    return (
      <div className="grid center font-item">
        <input type="radio" name="font" id={item.name} onChange={handleCheck.bind(this)} value={JSON.stringify(item)} />
        <label htmlFor={item.name} className="grid-1">
            <PictureFont text={item.name.substr(0, 3)} path={item.path}/>
        </label>
      </div>
    );
  });
  return <div className="font-picker">{fontItems}</div>;
};
