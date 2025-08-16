import { Link } from "react-router-dom";
import messageIcon from "/assets/messageIcon.png";

const Navbar = () => {
    return (
        <div className="py-[17px] px-[20px] md:py-[27px] md:px-[55px] flex justify-between items-center fixed inset-x-0 top-0 bg-white z-100">
            {/* Right section */}
            <div className="flex gap-1 items-center">
                <img
                    src={messageIcon}
                    alt="Message icon"
                    className="size-6 md:size-[34.24px]"
                />
                <h1 className="font-bold font-['Roboto',sans-serif] text-[13.55px] md:text-[20.04px]">
                    My learning journal
                </h1>
            </div>
            {/* Left section */}
            <div className="flex text-xs md:text-[16px] gap-7 md:gap-9 font-bold ">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT ME</Link>
            </div>
        </div>
    );
};

export default Navbar;
