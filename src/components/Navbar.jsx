import { Link } from "react-router-dom"
import logo from "/logo.png"

const Navbar = () => {
  return (
    <header className="bg-cream text-gray fixed z-10 top-0 w-full font-semibold flex justify-between items-center p-4 ">
        <div>
            <img src={logo} alt="" className="w-14 h-14" />
        </div>
        <div className="flex justify-between gap-20">
        <Link to="/" className="hover:border-b-[2px] border-gray pb-2">Home</Link>
        <Link to="/about" className="hover:border-b-[2px] border-gray pb-2">About</Link>
        <Link to="/services" className="hover:border-b-[2px] border-gray pb-2">Services</Link>
        <Link to="/contact-us" className="hover:border-b-[2px] border-gray pb-2">Contact Us</Link>  
        </div>
      
    </header>
  )
}

export default Navbar
