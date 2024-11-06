/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      {/* product container */}
      {isLoading ? (
        <div className="flex flex-row justify-center items-center mt-40">
          {/* spining or loading */}
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5 mt-5">
          {/* product card */}
          {productData.map(({ id, image, description, title }) => (
            <div key={id} className="card bg-base-100 w-full shadow-xl">
              <figure className="w-full">
                <img src={image} alt="Shoes" className="h-48 w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 50)}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/single-product/${id}`}
                    className="btn w-full btn-success text-white"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Products;
