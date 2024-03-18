import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const services = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="grid md:grid-cols-2">
          <div
            className="relative bg-cover bg-center h-screen mt-20 "
            style={{ backgroundImage: "url(/service.jpg)" }}
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center py-6 px-20">
              <h1 className="text-white text-4xl xs:text-6xl font-bold leading-10">
                Services
              </h1>
            </div>
          </div>

          <div className="bg-gray flex items-center justify-center text-white py-20 px-10">
            <div className="text-center md:text-left">
              <h1 className="text-xl xs:text-2xl">WE SERVE A HUGE RANGE OF INDUSTRIES</h1>
              <p className="leading-8 mt-5">
                Neque porro quisquam est, quiipsum quia dolor sit amet,
                consectetur adipisci numquam eius modi tempora incidunt lores ta
                porro ame.
              </p>

              <button className="border border-white px-6 py-4 text-white hover:bg-cream hover:text-gray hover:border-none mt-10 rounded-full ">
                KNOW MORE
              </button>
            </div>
          </div>
        </section>
        <section className="bg-[#f7f7f7f7] flex items-center justify-center h-60 p-10">
          <div className="text-center">
            <p className="text-xl xs:text-2xl mb-5">Strategy. Planning. Execution.</p>
            <p>
              Neque porro quisquam est, quiipsum quia dolor sit amet,
              consectetur adipisci numquam eius modi tempora incidunt lores ta
              porro ame.
            </p>
          </div>
        </section>
        <section>
          <div className="grid md:grid-cols-2 ">
            <div
              className="mb-80 md:mb-0 relative bg-cover bg-center h-full"
              style={{ backgroundImage: "url(/femaleboss.jpg)" }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="grid justify-center items-center px-10 py-20 gap-8">
              <div className="flex flex-col gap-2">
                <p>FINANACE</p>
                <p className="text-xl xs:text-2xl">Finance Management</p>
                <p>
                  Qui dolore ipsum quia dolor sit amet, consectetur adipisci
                  velit, sed quia non numquam eius modi tempora incidunt lores
                  ta porro ame.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p>TAX</p>
                <p className="text-xl xs:text-2xl">Tax Planning / Preparation</p>
                <p>
                  Qui dolore ipsum quia dolor sit amet, consectetur adipisci
                  velit, sed quia non numquam eius modi tempora incidunt lores
                  ta porro ame.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="order-2 md:order-1 grid justify-center gap-8 items-center px-10 py-20">
              <div className="flex flex-col gap-2">
                <p>BUSINESS</p>
                <p className="text-xl xs:text-2xl">Business Advice</p>
                <p>
                  Qui dolore ipsum quia dolor sit amet, consectetur adipisci
                  velit, sed quia non numquam eius modi tempora incidunt lores
                  ta porro ame.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>PAYROLL</p>
                <p className="text-xl xs:text-2xl">Payroll Management</p>
                <p>
                  Qui dolore ipsum quia dolor sit amet, consectetur adipisci
                  velit, sed quia non numquam eius modi tempora incidunt lores
                  ta porro ame.
                </p>
              </div>
            </div>
            <div
              className="mb-80 md:mb-0 order-1 md:order-1 relative bg-cover bg-center h-full"
              style={{ backgroundImage: "url(/paperwork.jpg)" }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        </section>
        <section className="bg-[#f7f7f7] grid md:grid-cols-2 gap-10 px-10 py-20">
            <div className="flex flex-col gap-4">
                <p>OTHER SERVICES</p>
                <p className="text-xl font-semibold">WE PROVIDE POSSIBLE SOLUTIONS TO GIVE YOUR BUSINESS A COMPETITIVE EDGE</p>
                <p>Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="border-b border-[#eeeeee] pb-4 flex">
                    <p className="font-semibold text-lg">Financial Accounting</p>
                </div> 
                <div className="border-b border-[#eeeeee] pb-4">
                    <p className="font-semibold text-lg">Tax Management</p>
                </div>
                <div className="border-b border-[#eeeeee] pb-4">
                    <p className="font-semibold text-lg">Legal Advice</p>
                </div>
                <div className="border-b border-[#eeeeee] pb-4">
                    <p className="font-semibold text-lg">Business Propogation</p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default services;
