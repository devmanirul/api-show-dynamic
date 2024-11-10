import Heading from "./Heading";

const Slider = ({ title, description }) => {
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <Heading description={description} title={title} />
      </div>
    </div>
  );
};
export default Slider;
