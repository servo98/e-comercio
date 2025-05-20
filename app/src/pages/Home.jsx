import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import { NavLink } from "react-router";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  // TOOD: Paginado filtro y búsqueda
  return (
    <>
      <h2>Catálogo de productos</h2>
      <Row className="g-4">
        {products.map((product, index) => (
          <Col md={3} sm={6} xs={12} key={index}>
            <Card className="h-100">
              <Card.Img
                src={product.photos[0]}
                style={{ maxHeight: "124px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${(+product.price).toFixed(2)}</Card.Text>
                <Button
                  variant="info"
                  as={NavLink}
                  to={`products/${product._id}`}
                >
                  Ver
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
