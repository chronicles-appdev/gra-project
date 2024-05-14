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
              Our services span a wide range of insurance and risk management solutions, empowering you to confidently navigate the ever-changing risk landscape. From securing the most competitive coverage to mitigating potential threats, we ensure your assets and future are comprehensively protected.
              </p>

            </div>
          </div>
        </section>
        <section className="bg-[#f7f7f7f7] flex items-center justify-center h-60 p-10">
          <div className="text-center">
            <p className="text-xl xs:text-2xl mb-5">  Minimize Risk, Maximize Security.</p>
            <p>
           Our expertise helps you navigate potential threats and find the right insurance plan, ensuring your peace of mind.
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
                <p>INSURANCE</p>
                <p className="text-xl xs:text-2xl">PROPERTY & CASUALTY</p>
                <p>
              We offer a comprehensive suite of property and casualty insurance solutions to protect your assets. This includes coverage for property damage (fire), business interruption, general accidents (burglary, theft), and more.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p>COVERAGE</p>
                <p className="text-xl xs:text-2xl">SPECIALIZED INDUSTRY COVERAGE</p>
                <p>
                We go beyond basic coverage,
 providing specialized insurance solutions for industries like Marine & Aviation, Oil & Gas, and Engineering. This ensures your specific needs and risks are addressed.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="order-2 md:order-1 grid justify-center gap-8 items-center px-10 py-20">
              <div className="flex flex-col gap-2">
                <p>ASSURANCE</p>
                <p className="text-xl xs:text-2xl">LIFE ASSURANCE & BENEFITS</p>
                <p>
                We offer various life assurance plans,
 including group and individual policies, keyman assurance, and educational endowment options. Additionally, we can assist with planning and managing pension and related benefit schemes.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>FINANCIAL</p>
                <p className="text-xl xs:text-2xl">FIANCIAL PLANNING & RISK MITIGATION</p>
                <p>
                We assist with financial planning strategies like sinking fund planning and review.
 This helps you set aside funds for future needs while minimizing risk and ensuring the financial stability of your business or personal finances.
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
            <p className="text-xl font-semibold">
 Global Risk Associates offers additional services to support your overall security. This includes assistance with financial planning for long-term needs, sinking funds, and reviewing bid/contract clauses to ensure proper risk mitigation strategies are in place.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b border-[#eeeeee] pb-4 flex">
              <p className="font-semibold text-lg">Pre-Loss & Post-Loss Site Visits</p>
            </div>
            <div className="border-b border-[#eeeeee] pb-4">
              <p className="font-semibold text-lg">Claims Management Advisory & Recovery</p>
            </div>
            <div className="border-b border-[#eeeeee] pb-4">
              <p className="font-semibold text-lg">Bid/Contract Package Insurance Clause Review</p>
            </div>
            <div className="border-b border-[#eeeeee] pb-4">
              <p className="font-semibold text-lg">Sinking Fund Planning & Review</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default services;
