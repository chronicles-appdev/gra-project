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
      <main>
        <section
          className="relative bg-cover bg-center h-screen mt-20 "
          style={{ backgroundImage: "url(/image1.jpg)" }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <section className="absolute inset-0 flex items-center justify-between py-6 px-20">
            <div className="text-white">
              <h1 className="text-4xl font-bold leading-10">
                NO ONE CAN SURELY PREDICT
              </h1>
              <h1 className="text-4xl font-bold">
                THE FUTURE. BUT WE CAN PROTECT IT.
              </h1>
              <p className="mt-8 text-lg md:w-1/2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <button className="text-white border border-2px border-white py-4 px-6 rounded-2xl mt-20 hover:bg-cream hover:text-gray hover:border-none">
                Contact Us
              </button>
            </div>
          </section>
        </section>

        <Investment />
        <Investment2 />
        <section className="absolute top-[2700px] md:top-[2000px]">
          <Values />
          <Growth />
          <Contact />
        </section>
      </main>
      <section className="relative top-[3800px] md:top-[3500px] ">
        <Footer />
      </section>
    </>
  );
};

export default Home;
