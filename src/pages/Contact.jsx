import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import contact from "/contact.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="grid md:grid-cols-2 gap-4 bg-white justify-around px-8 py-20 mt-20">
        <div className="flex items-center justify-center ">
          <img src={contact} alt="" className="w-3/4" />
        </div>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
};

export default Contact;
