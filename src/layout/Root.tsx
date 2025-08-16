import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        // Use setTimeout to ensure scroll happens after all content is rendered
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
        }, 0);
    }, [pathname]);
    return null;
};

const Root = () => {
    return (
        <div className="font-['Source_Sans_Pro',sans-serif]">
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
