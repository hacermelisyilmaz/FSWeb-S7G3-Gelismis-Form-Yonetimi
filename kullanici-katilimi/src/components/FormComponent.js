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

  const [formData, setFormData] = useState();

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
