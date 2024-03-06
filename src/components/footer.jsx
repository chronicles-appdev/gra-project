import { Link } from "react-router-dom";
import logo from "/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-20  w-full">
      <section className="grid md:grid-cols-3 gap-8 justify-between w-full">
        <div>
          <p className="text-2xl">Office Address</p>
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <IoLocationSharp className="text-2xl"/>
              <p>
                270, Ikorodu Road Obanikoro <br /> LAMLAT HOUSE Lagos.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt />
              <p>07069468832</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl">Quick Links</p>
          <div className="flex flex-col gap-3 mt-5">
            <Link to="/about" className="hover:text-cream">About</Link>
            <Link to="/services" className="hover:text-cream">Services</Link>
            <Link to="/contact-us" className="hover:text-cream">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-2xl">Digital FootPrints</p>
          <div className="flex flex-col gap-3 mt-5">
            <p>globalriskbrokers@yahoo.com</p>
            <p>info@globalrisks.com.ng</p>
          </div>
        </div>
      </section>
      <hr className="text-gray my-5" />
      <section className="grid md:grid-cols-2 justify-between items-center gap-4 mt-10">
        <div>
          <img src={logo} alt="" className="w-14 h-14" />
        </div>
        <div>
          <p>
            Copyright &copy; 2024 Global Risk Associates Limited. All Rights
            Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
