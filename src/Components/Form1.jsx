import React from "react";
import 'antd/dist/antd.css';
import { Button, Form, Input, message, Space } from 'antd';


const Form1 = () => {


    const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  const onFill = () => {
    form.setFieldsValue({
    //   url: 'https://taobao.com/',
    url:'http://google.com/',
    });
  };

    return(
<div>
<Form
       form={form}
       layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="url"
        label="URL"
        rules={[
          {
            required: true,
          },
          {
            type: 'url',
            warningOnly: true,
          },
          {
            type: 'alpha',
            min: 6,
          },
        ]}
      >
        <Input placeholder="input placeholder" type="date" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Fill
          </Button>
        </Space>
      </Form.Item>
    </Form>


</div>

    )
}

export default Form1;