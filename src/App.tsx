import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import About from "./pages/about";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

