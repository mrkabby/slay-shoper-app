import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const addToCart = (product) => {
  //   const updateCart = [...state.products, product]; // Use spread operator to create a new array
  //   updatePrice(updateCart);

  //   dispatch({
  //     type: "add",
  //     payload: updateCart,
  //   });
  // };

  //alternative
  const addToCart = (product) => {
    const existingProduct = state.products.find(
      (item) => item.name === product.name
    );
    if (existingProduct) {
      updateCartQuantity(existingProduct, existingProduct.quantity + 1);
    } else {
      const updateCart = [...state.products, { ...product, quantity: 1 }];
      updatePrice(updateCart);
      dispatch({ type: "add", payload: updateCart });
    }
  };

  const removeFromCart = (product) => {
    const updateCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updateCart);

    dispatch({
      type: "remove",
      payload: updateCart,
    });
  };

  //function to updateQuantity with price
  const updateCartQuantity = (product, newQuantity) => {
    const updateCart = state.products.map((item) => {
      if (item.name === product.name) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updatePrice(updateCart);
    dispatch({ type: "update", payload: updateCart });
  };

  //new function to update cartPrice
  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    dispatch({ type: "update price", payload: total });
  };

  // const updatePrice = (products) => {
  //   let total = 0;
  //   products.forEach((product) => {
  //     total += product.price;
  //   });
  //   dispatch({
  //     type: "update price",
  //     payload: total,
  //   });
  // };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
    updateCartQuantity,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};