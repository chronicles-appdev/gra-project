import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const About = () => {
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
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-10">
                About Us
              </h1>
            </div>
          </div>

          <div className="bg-gray flex items-center justify-center text-white py-20 px-10">
            <div className="text-center md:text-lef md:mt-20">
              <h2 className="text-xl xs:text-2xl">
                WE ARE &quot;GLOBAL RISKS ASSOCIATION&quot;
              </h2>
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
        <section className="flex flex-col md:flex-row px-10 py-20 gap-8 text-[#292D32]">
          <div className="text-center md:w-3/4">
            <p className="text-sm xs:text-md">Who We Are</p>
            <hr className="mt-10 border-b-[2px]" />
            <p className="text-xl xs:text-2xl mt-5 text-black">Company Profile</p>
          </div>
          <div className="text-md md:text-lg">
            <p>
              Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit.
            </p>
            <p className="leading-8 mt-5">
              Fames sequi placerat, laboris, nascetur posuere incidunt tempus
              sequi tenetur? Excepturi eum elementum rem, minima? Error, tempore
              et distinctio porta, earum! Aptent! Tenetur nibh interdum ea
              impedit pretium, exercitation congue? Ducimus sapien! Montes
              elementum! Doloribus fuga, molestie dolor fermentum nesciunt,
              harum esse alias tincidunt, qui, temporibus consectetuer
              voluptatum, porttitor, beatae delenit.
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-4">
          <div className="bg-gray text-white md:w-full text-center md:text-left px-10 py-20">
            <p className="text-sm xs:text-md">Who We Are</p>
            <hr className="mt-10 border-b-[2px] border-white md:w-1/2" />
            <p className="text-xl xs:text-2xl mt-5">ABOUT OUR ORGANIZATION</p>
          </div>
          <div className="grid md:grid-cols-3 px-10 py-20 gap-8">
            <div>
              <p className="text-lg">OUR VISION</p>
              <p className="leading-8 mt-5">
                Qui dolore ipsum quia dolor sit amet, consectetur adipisci
                velit, sed quia non numquam eius modi tempora porro ame.
              </p>
            </div>
            <div>
              <p className="text-lg">OUR MISSION</p>
              <p className="leading-8 mt-5">
              Neque porro quisquam est, quiipsum quia dolor sit amet,
                consectetur adipisci numquam eius modi tempora incidunt.
              </p>
            </div>
            <div>
              <p className="text-lg">OUR VALUES</p>
              <p className="leading-8 mt-5">
                Neque porro quisquam est, quiipsum quia dolor sit amet,
                consectetur adipisci numquam eius modi tempora incidunt.
              </p>
            </div>
          </div>
        </section>
        <section className="px-10 py-10">
          <p className="text-xl xs:text-2xl text-center">Board Of Directors</p>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            <div className="md:bg-[#f7f7f7] p-10 flex flex-col justify-center items-center">
              <div></div>
              <p>AMANDA LEE</p>
              <p>Founder / Director</p>
              <p className="leading-8">
                Neque porro quisquam est, quiipsum quia dolor sit amet, consec
                tetur numquam eius modi tempora incidunt lores ta porro
              </p>
              <div></div>
            </div>
            <div className="bg-white p-10 flex flex-col justify-center items-center">
              <div></div>
              <p>AMANDA LEE</p>
              <p>Founder / Director</p>
              <p className="leading-8">
                Neque porro quisquam est, quiipsum quia dolor sit amet, consec
                tetur numquam eius modi tempora incidunt lores ta porro
              </p>
              <div></div>
            </div>
            <div className="p-10 flex flex-col justify-center items-center">
              <div></div>
              <p>AMANDA LEE</p>
              <p>Founder / Director</p>
              <p className="leading-8">
                Neque porro quisquam est, quiipsum quia dolor sit amet, consec
                tetur numquam eius modi tempora incidunt lores ta porro
              </p>
              <div></div>
            </div>
          </div>
        </section>
        <section className="px-10 pt-10 pb-40">
          <p className="text-xl xs:text-2xl text-center">Our Team</p>
          <div className="grid md:grid-cols-3 mt-10 gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-sm">DIRECTOR</p>
              <p className="text-xl">Harvey Spector</p>
              <p>
                Neque porro quisquam est, quiipsum quia dolor sit amet, consec
                tetur numquam eius modi tempora incidunt lores ta porro
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm">DIRECTOR</p>
              <p className="text-xl">Harvey Spector</p>
              <p>
                Neque porro quisquam est, quiipsum quia dolor sit amet, consec
                tetur numquam eius modi tempora incidunt lores ta porro
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-sm">DIRECTOR</p>
              <p className="text-xl">Harvey Spector</p>
              <p>
                Neque porro quisquam est, quiipsum quia dolor sit amet, consec
                tetur numquam eius modi tempora incidunt lores ta porro
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
