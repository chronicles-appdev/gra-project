import ContactForm from "../components/ContactForm";
import contact from "/contact.jpg";

const Contact = () => {
  return (
    <section className="w-full grid md:grid-cols-2 gap-4 bg-white justify-around px-8 mt-10 py-20 ">
      <div className="flex items-center justify-center ">
        <img src={contact} alt="" className="w-3/4"/>
      </div>
     <div className="flex justify-center">
     <ContactForm />
     </div>
    </section>
  );
};

export default Contact;
