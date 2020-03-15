import React, { useState } from "react";
import {
  Media,
  InputGroup,
  Button,
  FormControl,
  Container
} from "react-bootstrap";

const Home = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Container>
      <div className="mt-5">
        <Media>
          <img
            height={400}
            width={300}
            src={require("../../Assets/Images/mask.jpg")}
            alt="Face Mask"
          />
          <Media.Body>
            <p className="ml-3">Face mask to filter air while breathing.</p>
            <h4 className="ml-3">Price: ${quantity * 3.99} </h4>
            <p className="ml-3">Quantity:</p>
            <div className="ml-3">
              <InputGroup size="sm">
                <InputGroup.Prepend>
                  <Button onClick={decreaseQuantity}> - </Button>
                </InputGroup.Prepend>
                <FormControl value={quantity} width="10" className="col-sm-1" />
                <InputGroup.Append>
                  <Button onClick={increaseQuantity}> + </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div className="ml-3 mt-3">
              <Button variant="warning" size="lg" style={{ color: "blue" }}>
                Checkout
              </Button>
            </div>
          </Media.Body>
        </Media>
      </div>
    </Container>
  );
};

export default Home;
