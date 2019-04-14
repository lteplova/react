class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  handlerWindowScroll = e => {
    this.setPosition(window.scrollY);
  };

  render() {
    return (
      <SearchBoxView
        refProp={el => (this.searchEl = el)}
        fixed={this.state.fixed}
      />
    );
  }

  get topPos() {
    return this.searchEl.getBoundingClientRect().top;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handlerWindowScroll);
  }

  isFixed(scrollY) {
    return scrollY >= this.topPos;
  }

  setPosition(scrollY) {
    this.setState({ fixed: this.isFixed(scrollY) });
  }
}
