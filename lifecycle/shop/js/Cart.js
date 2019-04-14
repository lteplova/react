class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isOpen || this.props.isOpen) return true;
    if (nextProps.items  != this.props.items && nextProps.isOpen) return true;
    return false;
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
