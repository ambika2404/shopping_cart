// import React, { useState } from "react";
//import axios from "axios";
// import { Card, ListGroup } from "react-bootstrap";

//export default function Item() {
  //   const [ready, SetReady] = useState(false);
  //   const [products, setProducts] = useState(null);
  //function handleResponse(response) {
  //setProducts(response.data.products);
  //SetReady(true);
  // }
  //   if (ready) {
  //     console.log(111);
  //     console.log(products);
  //     return (
  //       // use card boot strap
  //       <Card style={{ width: "20rem" }}>
  //         <Card.Img
  //           variant="top"
  //           style={{ width: 318, height: 250 }}
  //           src={products[0].images[1]}
  //         />
  //         <Card.Body style={{ height: 100 }}>
  //           <Card.Title>{products[0].title}</Card.Title>
  //           <Card.Text>{products[0].description}</Card.Text>
  //         </Card.Body>
  //         <ListGroup className="list-group-flush">
  //           <ListGroup.Item>${products[0].price}</ListGroup.Item>
  //         </ListGroup>
  //       </Card>
  //     );
  //     // use card boot strap
  //     // <h1>{products[4].title}</h1>;
  //   } else {
  //     console.log(222);
  //let apiUrl = `https://dummyjson.com/products`;
  //axios.get(apiUrl).then(handleResponse);
  //   }
}
