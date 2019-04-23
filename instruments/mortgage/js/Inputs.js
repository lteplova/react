const { Input, InputNumber, Form } = antd;

function onChange(value) {
  console.log("changed", value);
}

const Inputs = () => (
  <div>
   <Form.Item label="Стоимость:">
      <InputNumber
        defaultValue="2000000"
        min={1000000}
        max={10000000}
        step={100}
        onChange={onChange}
      />
    </Form.Item>

    <Form.Item label="На руках:">
      <InputNumber
        defaultValue="2000000"
        min={1000000}
        max={10000000}
        step={100}
        onChange={onChange}
      />
    </Form.Item>

    <Form.Item label="Срок кредита:">
      <InputNumber
        defaultValue="5"
        min={3}
        max={25}
        step={1}
        onChange={onChange}
      />{" "}
      лет
    </Form.Item>
  </div>
);
