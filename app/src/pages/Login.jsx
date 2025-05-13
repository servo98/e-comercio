import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useState } from "react";
import { useNavigate } from "react-router";

import { login } from "../services/authServices";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    credential: "",
    password: "",
  });

  const [validated, setvalidated] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setvalidated(true);
    } else {
      try {
        const { data } = await login(formData);
        console.log(data);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Container>
      <h1>Iniciar sesión</h1>
      <Form
        noValidate
        className="mt-5"
        onSubmit={handleSubmit}
        validated={validated}
      >
        <Form.Group className="mb-3">
          <Form.Label>Correo, teléfono o nombre de usuario</Form.Label>
          <Form.Control
            name="credential"
            required
            type="text"
            value={formData.credential}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            required
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
