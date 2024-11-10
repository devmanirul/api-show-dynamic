import Slider from "../../Components/Home/Slider";

const Home = () => {
  const data = {
    description: "Hello",
    title: "Hi",
  };
  return (
    <div>
      <Slider {...data} />
    </div>
  );
};
export default Home;
