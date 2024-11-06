import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="min-h-screen"> 
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
