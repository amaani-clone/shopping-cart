import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";

const Cart = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const products = [...Array(9)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: "business" }),
    inStock: faker.helpers.arrayElements([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
