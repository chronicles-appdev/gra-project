import graph from "/GRAPH.jpg"

const Growth = () => {
  return (
  
        <section className="w-full text-black bg-[#f7f7f7f7] px-10 py-20">
      <div>
        <p className="text-center  mb-5">WE ARE ALWAYS FOCUSED ON</p>
        <p className="text-4xl text-center mb-5">GROWTH OF CLIENTS</p>
        <hr className="w-20 mx-auto mt-4 border-t-[2px]" />
      </div>
      <div className="grid md:grid-cols-2 justify-around gap-4 mt-10">
        <div className="grid gap-10 md:gap-4 justify-center">
          <div>
            <p className="text-xl">INVESTMENT</p>
            <p>
              Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit,
              sed quia non numquam eius modi tempora incidunt lores ta porro
              ame.
            </p>
          </div>
          <div>
            <p className="text-xl">LOANS</p>
            <p>
              Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit,
              sed quia non numquam eius modi tempora incidunt lores ta porro
              ame.
            </p>
          </div>
          <div>
            <p className="text-xl">BUSINESS ADVICE</p>
            <p>
              Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit,
              sed quia non numquam eius modi tempora incidunt lores ta porro
              ame.
            </p>
          </div>
        </div>
        <div className="grid gap-10 md:gap-20 justify-center pt-10 md:pt-40">
            <div className="flex justify-center">
                <img src={graph} alt="" className="w-full h-60" />
            </div>
        <div>
            <p className="text-xl">PROGRESS</p>
            <p>
              Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit,
              sed quia non numquam eius modi tempora incidunt lores ta porro
              ame.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Growth;
