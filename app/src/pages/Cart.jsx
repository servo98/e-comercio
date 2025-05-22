import { useState, useEffect, useRef } from "react";

import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Spinner from "react-bootstrap/Spinner";

import { getCart, updateCart } from "../services/cartServices";

const Loading = () => {
  return (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  );
};

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const prevCartRef = useRef();

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

  useEffect(() => {
    if (prevCartRef.current != undefined) {
      const updateData = async () => {
        try {
          setIsUpdating(true);
          await updateCart(
            cart.items.map((item) => ({
              productId: item.product._id,
              quantity: item.quantity,
            }))
          );
        } catch (error) {
          console.error(error);
        } finally {
          setIsUpdating(false);
        }
      };
      updateData();
    } else {
      prevCartRef.current = cart;
    }
  }, [cart]);

  const getTotal = () => {
    if (!cart) {
      return 0;
    }

    const total = cart.items.reduce((acc, current) => {
      return acc + current.quantity * current.price;
    }, 0);

    return total;
  };

  const handleLessItem = (productId) => {
    const indexToChange = cart.items.findIndex((item) => {
      return item.product._id == productId;
    });

    let tempItems = cart.items;

    tempItems[indexToChange].quantity--;

    tempItems = tempItems.filter((item) => {
      return item.quantity > 0;
    });

    setCart((prev) => ({
      ...prev,
      items: tempItems,
    }));
  };
  const handleMoreItem = (productId) => {
    const indexToChange = cart.items.findIndex((item) => {
      return item.product._id == productId;
    });

    let tempItems = cart.items;

    tempItems[indexToChange].quantity++;

    setCart((prev) => ({
      ...prev,
      items: tempItems,
    }));
  };

  const handleDeleteItem = (productId) => {
    const items = cart.items;
    const filtered = items.filter((item) => {
      return item.product._id != productId;
    });

    setCart((prev) => ({
      ...prev,
      items: filtered,
    }));
  };
  const handleItemChange = (productId, value) => {
    const indexToChange = cart.items.findIndex((item) => {
      return item.product._id == productId;
    });

    let tempItems = cart.items;

    tempItems[indexToChange].quantity = value;

    setCart((prev) => ({
      ...prev,
      items: tempItems,
    }));
  };

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
              <div className="fw-bold">
                {item.product.name} - ${item.product.price}
              </div>
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
            <ButtonGroup className="mx-1">
              <Button
                variant="secondary"
                disabled={isUpdating}
                onClick={() => {
                  handleLessItem(item.product._id);
                }}
              >
                {isUpdating ? <Loading /> : <i className="bi bi-dash-lg"></i>}
              </Button>
              <Form.Control
                style={{ maxWidth: "64px" }}
                value={item.quantity}
                type="number"
                disabled={isUpdating}
                min={1}
                onChange={(e) => {
                  handleItemChange(item.product._id, e.target.value);
                }}
              />
              <Button
                variant="secondary"
                disabled={isUpdating}
                onClick={() => {
                  handleMoreItem(item.product._id);
                }}
              >
                {isUpdating ? <Loading /> : <i className="bi bi-plus-lg"></i>}
              </Button>
            </ButtonGroup>

            <Button
              variant="danger"
              onClick={() => {
                handleDeleteItem(item.product._id);
              }}
            >
              <i className="bi bi-trash-fill"></i>
            </Button>
          </ListGroup.Item>
        ))
      ) : (
        <h4>No tienes elementos en el carrito</h4>
      )}

      <h4 className="text-end">Total: ${getTotal().toFixed(2)}</h4>
    </ListGroup>
  );
};

export default Cart;
