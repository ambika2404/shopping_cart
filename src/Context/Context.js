import React, { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./Reducers";
import { faker } from "@faker-js/faker";

const cart = createContext();
faker.seed(123);

export default function Context({ children }) {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  console.log(products);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <cart.Provider value={{ state, dispatch }}>{children}</cart.Provider>;
}

export const CartState = () => {
  return useContext(cart);
};
