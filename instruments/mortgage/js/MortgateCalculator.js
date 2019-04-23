const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

const MortgateCalculator = () => (
  <div>
    <Form {...formItemLayout}>
      <Autocomplete/>
      <Inputs/>
      <ButtonEl/>
    </Form>
  </div>
);
