const Heading = ({ description, title }) => {
  return (
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">{description}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  );
};
export default Heading;
