import { Link } from "react-router-dom";
import logo from "/logo.png";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const thresholdWidth = 768;
      if (window.innerWidth >= thresholdWidth) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="bg-cream text-gray fixed z-10 top-0 w-full font-semibold">
      <nav className="flex justify-between items-center py-4 px-6">
        <img src={logo} alt="" className="w-14 h-14" />
        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-3 lg:hidden cursor-pointer"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-cream z-20 ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="border-b border-gray pb-2 w-full text-center"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between gap-10">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="hover:border-b-[2px] border-gray pb-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
