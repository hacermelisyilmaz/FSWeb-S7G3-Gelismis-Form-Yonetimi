import * as Yup from "yup";
import { Form } from "reactstrap";
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
      <Form></Form>
    </div>
  );
}

export default FormComponent;
