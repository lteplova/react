
const { Select, Form } = antd;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const Autocomplete = () => (
  <div>
    <Form.Item label="Тип квартиры">
      <Select defaultValue="1" style={{ width: 300 }} onChange={handleChange}>
        <Option value="1">Квартира в новостройке</Option>
        <Option value="2">Готовая квартира</Option>
        <Option value="3">Загородный дом</Option>
      </Select>
    </Form.Item>
    </div>
);

