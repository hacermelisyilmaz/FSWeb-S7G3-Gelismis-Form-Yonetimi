import * as Yup from "yup";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";

function FormComponent() {
  const emptyForm = {
    name: "",
    email: "",
    password: "",
    terms: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [formErrors, setFormErrors] = useState(emptyForm);

  const formSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string()
      .email("Lütfen geçerli bir mail adresi girin.")
      .required("Bir mail adresi girmelisiniz."),
    password: Yup.string()
      .required("Lütfen şifrenizi girin.")
      .min(4, "Şifreniz en az 4 karakterden oluşmalıdır."),
    terms: Yup.boolean().oneOf(
      [true],
      "Lütfen kullanım koşullarını okuyup kabul edin."
    ),
  });

  return (
    <div className="Form">
      <Form>
        <FormGroup>
          <Label>İsim</Label>
          <Input name="name" placeholder="İsim ve soyisminizi girin"></Input>
        </FormGroup>
        <FormGroup>
          <Label>E-mail</Label>
          <Input
            name="email"
            placeholder="E-mailinizi girin"
            type="email"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Şifre</Label>
          <Input
            name="password"
            placeholder="Şifrenizi girin"
            type="password"
          ></Input>
        </FormGroup>
        <FormGroup check>
          <Input name="terms" type="checkbox"></Input>
          <Label>Kullanım şartlarını okudum, kabul ediyorum.</Label>
        </FormGroup>
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default FormComponent;
