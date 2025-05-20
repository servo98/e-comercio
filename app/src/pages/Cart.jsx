import { useState, useEffect } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

import { getCart } from "../services/cartServices";

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getCart();
        setCart(data.cart);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <ListGroup as="ol" numbered>
      {cart && cart.items.length != 0 ? (
        cart.items.map((item, index) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={index}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.product.name}</div>
              {item.product.description}
            </div>

            {/* TODO: Controles para modificar la cantidad o eliminar el producto del carrito */}

            <Image
              src={item.product.photos[0]}
              thumbnail
              style={{ maxHeight: "80px" }}
            />
            <Badge bg="primary" pill>
              {item.quantity}
            </Badge>
          </ListGroup.Item>
        ))
      ) : (
        <h4>No tienes elementos en el carrito</h4>
      )}

      <h4 className="text-end">
        Total: ${cart ? (+cart.total).toFixed(2) : 0.0}
      </h4>
    </ListGroup>
  );
};

export default Cart;
