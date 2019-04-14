class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isOpen || this.props.isOpen) return true;
    if (this.props.items != nextProps.items && !nextProps.isOpen) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
