import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import PortfolioDetail from "./pages/PortfolioDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
