import graph from "/GRAPH.jpg"

const Growth = () => {
  return (
  
        <section className="w-full text-black bg-[#f7f7f7f7] px-10 py-20">
      <div>
        <p className="text-center text-sm xs:text-md  mb-5">WE ARE ALWAYS FOCUSED ON</p>
        <p className="text-xl xs:text-2xl md:text-4xl text-center mb-5">MITIGATING YOUR RISK</p>
        <hr className="w-20 mx-auto mt-4 border-t-[2px]" />
      </div>
      <div className="grid md:grid-cols-2 justify-around gap-4 mt-10">
        <div className="grid gap-10 md:gap-4 justify-center">
          <div>
            <p className="text-lg xs:text-xl">EXPERT GUIDANCE
  </p>
            <p>
            Our team's knowledge navigates the complexities of insurance, finding the most affordable coverage to meet your specific needs.
            </p>
          </div>
          <div>
            <p className="text-lg xs:text-xl">REDUCE RISKS</p>
            <p>
            Our expertise minimizes your insurance risk while our negotiation skills ensure you get the best value.
            </p>
          </div>
          <div>
            <p className="text-lg xs:text-xl">MAXIMIZE COVERAGE</p>
            <p>
            Our in-depth market knowledge finds the best coverage options, reducing your reliance on expensive deductibles in the event of a claim.
            </p>
          </div>
        </div>
        <div className="grid gap-10 md:gap-20 justify-center pt-10 md:pt-40">
            <div className="flex justify-center">
                <img src={graph} alt="" className="w-full h-60" />
            </div>
        <div>
            <p className="text-lg xs:text-xl">REST ASSURED</p>
            <p>
            Focus on what matters most knowing you're protected with comprehensive insurance at a price that won't break the bank.


            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Growth;
