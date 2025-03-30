import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/portfolio-logo.png";

const tabItems = [
  { name: "About", pathRegex: /^\/$/, path: "/" },
  {
    name: "Portfolio",
    pathRegex: /^\/portfolio(\/[\w-]+)?$/,
    path: "/portfolio",
  },
  { name: "Contact", pathRegex: /^\/contact$/, path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Memoized active tab detection
  const activeTab = useMemo(() => {
    return tabItems.find((tab) => tab.pathRegex.test(location.pathname))?.name;
  }, [location.pathname]);

  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-background-default/80 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo & Branding */}
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-highlight">MyPortfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex">
          {tabItems.map((tab) => (
            <span
              key={tab.name}
              className={`cursor-pointer transition ${
                activeTab === tab.name
                  ? "border-b-2 border-highlight font-semibold text-highlight"
                  : "text-primary hover:text-highlight/80"
              }`}
              onClick={() => navigate(tab.path)}
            >
              {tab.name}
            </span>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="text-primary focus:outline-none md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {menuOpen && (
        <nav className="flex flex-col bg-background-default py-4 shadow-md md:hidden">
          {tabItems.map((tab) => (
            <span
              key={tab.name}
              className={`cursor-pointer py-2 text-center transition ${
                activeTab === tab.name
                  ? "font-bold text-highlight"
                  : "text-primary"
              }`}
              onClick={() => {
                navigate(tab.path);
                setMenuOpen(false);
              }}
            >
              {tab.name}
            </span>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
