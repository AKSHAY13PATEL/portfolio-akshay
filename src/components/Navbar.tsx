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
    <header className="fixed left-0 top-0 z-40 w-full bg-background-default/70 shadow-xl backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo & Branding */}
        <div
          className="flex cursor-pointer items-center gap-3 transition-transform duration-300 hover:scale-105"
          onClick={() => navigate("/")}
        >
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-10 rounded-full border-2 border-highlight bg-white/10 object-contain shadow-md transition-transform duration-300 hover:rotate-6"
          />
          <span className="text-xl font-extrabold text-[#E63E21] drop-shadow-lg">
            MyPortfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          {tabItems.map((tab) => (
            <span
              key={tab.name}
              className={`relative cursor-pointer px-2 py-1 text-lg font-medium transition-colors duration-200 ${
                activeTab === tab.name
                  ? "text-[#E63E21]"
                  : "text-primary hover:text-highlight/90"
              } group`}
              onClick={() => navigate(tab.path)}
            >
              {tab.name}
              {/* Underline animation */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 w-full rounded bg-[#E63E21] transition-all duration-300 ${activeTab === tab.name ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-80"} `}
              />
            </span>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="text-highlight transition-transform duration-200 hover:scale-110 focus:outline-none md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <FaBars size={28} />
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {menuOpen && (
        <div className="pointer-events-auto translate-y-0 opacity-100 transition-all duration-300 md:hidden">
          <nav className="mx-4 mt-2 flex flex-col rounded-xl bg-background-default/90 py-4 shadow-2xl ring-1 ring-highlight/20 backdrop-blur-lg">
            {tabItems.map((tab) => (
              <span
                key={tab.name}
                className={`cursor-pointer py-3 text-center text-lg font-semibold transition-colors duration-200 ${
                  activeTab === tab.name
                    ? "text-[#E63E21]"
                    : "text-primary hover:text-highlight/90"
                } `}
                onClick={() => {
                  navigate(tab.path);
                  setMenuOpen(false);
                }}
              >
                {tab.name}
              </span>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
