import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useState } from "react";
import { useNavigate } from "react-router";

import { register } from "../services/authServices";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    address: "",
    phone: "",
    username: "",
    email: "",
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
        const { data } = await register(formData);
        console.log(data);
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Container>
      <h1>Registrarse</h1>
      <Form
        noValidate
        className="mt-5"
        onSubmit={handleSubmit}
        validated={validated}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="firstName"
              required
              type="text"
              placeholder="Nombre"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Apellido(s)</Form.Label>
            <Form.Control
              name="lastName"
              required
              type="text"
              placeholder="Apellido(s)"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              name="birthday"
              required
              type="date"
              value={formData.birthday}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              name="phone"
              required
              type="text"
              placeholder="Nombre"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              name="address"
              required
              placeholder="1234 Main St"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              name="email"
              required
              type="text"
              placeholder="Apellido(s)"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              name="username"
              required
              type="text"
              placeholder="usuario123"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="password"
              required
              type="password"
              placeholder="Ingresa contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
