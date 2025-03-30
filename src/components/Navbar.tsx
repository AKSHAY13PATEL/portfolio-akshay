import { useLocation, useNavigate } from "react-router-dom";

const tabItems = [
  { name: "About", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed left-1/2 top-2 z-20 flex h-auto w-full max-w-full -translate-x-1/2 justify-between gap-2 bg-background-default/70 px-6 py-4 text-lg uppercase backdrop-blur-md">
      {tabItems.map((tab, index) => {
        return (
          <span
            key={index}
            className={`cursor-pointer ${location.pathname === tab.path ? "font-semibold text-highlight" : "font-normal text-primary"}`}
            onClick={() => navigate(tab.path)}
          >
            {tab.name}
          </span>
        );
      })}
    </div>
  );
};

export default Navbar;
