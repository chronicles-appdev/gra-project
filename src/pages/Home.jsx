import Growth from "../components/Growth";
import Navbar from "../components/Navbar";
import Values from "../components/Values";
import Footer from "../components/footer";
import Investment from "../components/investment";
import Investment2 from "../components/investment2";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <section
          className="relative bg-cover bg-center w-full h-screen mt-20 py-60"
          style={{ backgroundImage: "url(/image1.jpg)" }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <section className="absolute inset-0 flex items-center justify-between py-6 px-10 md:px-20">
            <div className="text-white">
              <h1 className="font-bold text-xl xs:text-2xl sm:text-4xl ">
                NO ONE CAN SURELY PREDICT <br /> THE FUTURE. BUT WE CAN PROTECT IT.
              </h1>
              <p className="mt-8 text-md xs:text-lg w-full md:w-1/2 text-center">
                Global Risk Associates Limited was established in 1981.
              </p>

              <button className="text-white border border-2px border-white py-4 px-6 rounded-2xl mt-20 hover:bg-cream hover:text-gray hover:border-none">
                Contact Us
              </button>
            </div>
          </section>
        </section>

        <Investment />
        <Investment2 />
        <section className="w-full absolute top-[165rem]  md:top-[125rem]">
          <Values />
          <Growth />
          <Contact />
        </section>
      </main>
      <section className="w-full relative top-[230rem] sm:top-[240rem] md:top-[220rem]">
        <Footer />
      </section>
    </>
  );
};

export default Home;
