import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router";

const MyProducts = () => {
  const [products, setproducts] = useState([]);
  // TODO enlistar mis productos
  return (
    <Container>
      <h1>Mis productos</h1>
      {products.length == 0 ? (
        <h4>No tienes productos registrados</h4>
      ) : (
        <p>lista de productos</p>
      )}
      <Button variant="success" as={NavLink} to="add">
        Agregar producto
      </Button>
    </Container>
  );
};

export default MyProducts;
