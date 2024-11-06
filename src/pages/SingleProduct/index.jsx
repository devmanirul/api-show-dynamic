import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="p-10 border-2">
      {/* card */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-5/12">
          <img src={data.image} alt="Album" className="h-96 object-fill" />
        </figure>
        <div className="card-body w-7/12">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <div className="">
            <p className="text-xl font-bold">${data.price}</p>
            <p className="bg-success text-white inline-block mt-5 rounded-sm p-1">
              ${data.category}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success text-white">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
