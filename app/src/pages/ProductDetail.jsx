import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductDetail } from "../services/productServices";
import { addToCart } from "../services/cartServices";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getProductDetail(productId);
        setProduct(data.product);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [productId]);

  const handleAddtoCart = async () => {
    try {
      setIsLoading(true);
      const { data } = await addToCart(product._id, 1);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    product && (
      <>
        <Carousel data-bs-theme="dark">
          {product.photos.map((imgURL, index) => (
            <Carousel.Item key={index}>
              <Image
                className="d-block mx-auto"
                src={imgURL}
                alt=""
                style={{ maxHeight: "320px", marginBottom: "200px" }}
              />
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Row className="text-center">
          <Col className="col-12 col-md-6 mb-4">
            <h4>Precio: ${(+product.price).toFixed(2)}</h4>
          </Col>
          {/* TODO: Flujo de carrito de compra y datos del vendedor*/}
          <Col className="col-12 col-md-6">
            <Button
              variant="success"
              onClick={handleAddtoCart}
              disabled={isLoading}
            >
              Agregar al carrito
            </Button>
          </Col>
        </Row>
      </>
    )
  );
};

export default ProductDetail;
