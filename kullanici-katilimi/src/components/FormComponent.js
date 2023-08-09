import * as Yup from "yup";
import { Form } from "reactstrap";

function FormComponent() {
  const emptyForm = {
    name: "",
    email: "",
    password: "",
    terms: "",
  };

  return (
    <div className="Form">
      <Form></Form>
    </div>
  );
}

export default FormComponent;
