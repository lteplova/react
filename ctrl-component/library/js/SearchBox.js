const SearchBox = props => {
  let searchString = props.value;
  const handlerFilter = () => {
      props.filterBooks(searchString.value);
  };
  return (
    <input
      type="text"
      ref={el => (searchString = el)}
      onChange={handlerFilter.bind(this)}
      value={props.value}
      placeholder="Поиск по названию или автору"
    />
  );
};
