import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const Contact = () => {
  const data = useContext(ProductContext);
  console.log(data);
  return <div>Contact</div>;
};
export default Contact;
