import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const About = () => {
  const data = useContext(ProductContext);
  console.log(data);
  return <div>About</div>;
};
export default About;
