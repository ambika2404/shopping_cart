import React from "react";
import { Badge, Container, Dropdown, FormControl } from "react-bootstrap";
import { RiShoppingCartFill } from "react-icons/ri";
import Navbar from "react-bootstrap/Navbar";
// import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a Product"
            className="m-auto"
          />
        </Navbar.Text>

        <Dropdown align="right">
          <Dropdown.Toggle variant="success">
            <RiShoppingCartFill color="white" fontSize="25px" />
            <Badge bg="dark">{10}</Badge>
          </Dropdown.Toggle>

          <DropdownMenu>
            <DropdownItem>Clothes</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* <Dropdown align="right">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <RiShoppingCartFill color="white" fontSize="25px" />
            <Badge bg="secondary">{10}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            <span style={{ padding: 10 }}>Cart is Empty</span>
          </Dropdown.Menu>
        </Dropdown> */}
      </Container>
    </Navbar>
  );
}
