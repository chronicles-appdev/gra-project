import ContactForm from "../components/ContactForm";
import contact from "/contact.jpg";

const Contact = () => {
  return (
    <section className="grid md:grid-cols-2 gap-4 bg-white justify-around px-8 py-20 ">
      <div className="flex items-center justify-center ">
        <img src={contact} alt="" className="w-3/4"/>
      </div>
     <ContactForm />
    </section>
  );
};

export default Contact;
