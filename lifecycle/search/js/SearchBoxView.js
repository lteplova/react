const SearchBoxView = ({ refProp, fixed }) => (
  <section className="container" ref={refProp}>
    <div className="row">
      <div className="col-sm-12">
        <input
          className={`search-box ${fixed ? 'search-box_fixed' : null}`}
          placeholder="Поиск"
        >
        </input>
      </div>
    </div>
  </section>
);
