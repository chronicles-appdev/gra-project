const ContactForm = () => {
  return (
    <form action="" className="border border-gray text-black p-6 w-full rounded">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Enter your fullname"
            className="border-[1.5px] border-gray p-4 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Enter your email address"
            className="border-[1.5px] border-gray p-4 rounded-lg"
            required
          />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="border-[1.5px] border-gray p-4 rounded-lg"
        ></textarea>
      </div>
      <button className="bg-gray font-semibold text-white rounded-lg mt-5 w-full p-4 hover:bg-cream hover:text-gray">Sumbit</button>
    </form>
  );
};

export default ContactForm;
