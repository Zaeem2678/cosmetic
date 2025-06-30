import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";
import MostSellingProducts from "../pages/MostSellingProducts";

export function AppRoutes() {
  return (
    <Routes>
      {/* Routes with Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/most-selling" element={<MostSellingProducts />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
