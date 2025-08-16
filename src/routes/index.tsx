import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../layout/Root";
import Post from "../pages/Post";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="post/:id" element={<Post />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
