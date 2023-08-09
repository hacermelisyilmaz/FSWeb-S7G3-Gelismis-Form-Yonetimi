import * as Yup from "yup";
import { Form, FormGroup } from "reactstrap";
import { useState } from "react";

function FormComponent() {
  const emptyForm = {
    name: "",
    email: "",
    password: "",
    terms: "",
  };

  const [formData, setFormData] = useState();

  return (
    <div className="Form">
      <Form>
        <FormGroup></FormGroup>
        <FormGroup></FormGroup>
        <FormGroup></FormGroup>
        <FormGroup></FormGroup>
        <FormGroup></FormGroup>
      </Form>
    </div>
  );
}

export default FormComponent;
