import React from "react";

import { Input, Button } from "antd";

function setApiKey({ submite, cancel }) {
  function submitHandler(event) {
    event.preventDefault();
    let KEY = event.target.key.value;
    submite(KEY);
  }

  return (
    <form className="set-api-key-form" onSubmit={submitHandler}>
      <label htmlFor="api-key">Введите ключ API</label>
      <Input name="key" id="api-key" />
      <Button htmlType="submit">Save</Button>
      <Button>Cancel</Button>
    </form>
  );
}
export default setApiKey;
