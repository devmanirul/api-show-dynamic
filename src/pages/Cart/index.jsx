import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const Cart = () => {
  const { cartProducts, removeProduct } = useContext(ProductContext);
  console.log(cartProducts);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={product.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.title}</div>
                    <div className="text-sm opacity-50">{product.catagory}</div>
                  </div>
                </div>
              </td>
              <td>{product.description.slice(0, 50)}</td>
              <td>$ {product.price}</td>
              <th>
                <button
                  onClick={() => removeProduct(product.id)}
                  className="btn btn-error btn-md"
                >
                  Remove
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Cart;
