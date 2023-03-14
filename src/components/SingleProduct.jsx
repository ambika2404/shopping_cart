import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

export default function SingleProduct({ prod }) {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>Rs {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          <Button variant="danger">Remove from cart</Button>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
