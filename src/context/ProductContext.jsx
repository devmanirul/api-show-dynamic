/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// create context 
export const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // product handle
  const addProduct = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  // product remove
  const removeProduct = (id) => {
    const filterProduct = cartProducts.filter((product) => product.id !== id);
    setCartProducts(filterProduct);
  };

  const productValue = { cartProducts, addProduct, removeProduct };

  return (
    <ProductContext.Provider value={productValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
