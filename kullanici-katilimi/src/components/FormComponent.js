import axios from "axios";
import { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import * as Yup from "yup";

function FormComponent() {
  const emptyForm = {
    name: "",
    email: "",
    password: "",
    terms: false,
  };

  const [formData, setFormData] = useState(emptyForm);
  const [formErrors, setFormErrors] = useState(emptyForm);
  const [isFormValid, setFormValid] = useState(false);
  const [userList, setUserList] = useState([]);

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Lütfen isminiiz ve soyisminizi giriniz.")
      .test(
        "min-words",
        "Girdiniz en az iki kelimeden oluşmalıdır.",
        (value) => {
          if (value) {
            const words = value.split(" ");
            return words.length >= 2;
          }
        }
      ),
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

  const validateFormField = (event) => {
    const { name, value, type, checked } = event.target;
    const input = type === "checkbox" ? checked : value;

    Yup.reach(formSchema, name)
      .validate(input)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((error) => {
        setFormErrors({ ...formErrors, [name]: error.errors[0] });
      });
  };

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    validateFormField(event);
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("https://reqres.in/api/users", formData)
      .then(function (response) {
        const updatedUserList = [...userList];
        updatedUserList.push(response.data);
        setUserList(updatedUserList);
      })
      .catch(function (error) {
        console.log(error);
      });

    setFormData(emptyForm);
  };

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setFormValid(valid));
  }, [formData]);

  return (
    <div className="Form" onSubmit={submitHandler}>
      <Form>
        <FormGroup>
          <Label htmlFor="user-name">İsim</Label>
          <Input
            id="user-name"
            name="name"
            placeholder="İsim ve soyisminizi girin"
            onChange={changeHandler}
            value={formData.name}
            invalid={!!formErrors.name}
            data-cy="name-input"
          ></Input>
          <FormFeedback>{formErrors.name}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="user-email">E-mail</Label>
          <Input
            id="user-email"
            name="email"
            placeholder="E-mailinizi girin"
            type="email"
            onChange={changeHandler}
            value={formData.email}
            invalid={!!formErrors.email}
            data-cy="email-input"
          ></Input>
          <FormFeedback>{formErrors.email}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="user-password">Şifre</Label>
          <Input
            id="user-password"
            name="password"
            placeholder="Şifrenizi girin"
            type="password"
            onChange={changeHandler}
            value={formData.password}
            invalid={!!formErrors.password}
            data-cy="password-input"
          ></Input>
          <FormFeedback>{formErrors.password}</FormFeedback>
        </FormGroup>
        <FormGroup check>
          <Input
            id="user-terms"
            name="terms"
            type="checkbox"
            onChange={changeHandler}
            checked={!!formData.terms}
            invalid={!!formErrors.terms}
            data-cy="terms-input"
          ></Input>
          <Label htmlFor="user-terms">
            Kullanım şartlarını okudum, kabul ediyorum.
          </Label>
          <FormFeedback>{formErrors.terms}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Button type="submit" disabled={!isFormValid} data-cy="submit-button">
            Gönder
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default FormComponent;
