import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div className="font-['Source_Sans_Pro',sans-serif]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
