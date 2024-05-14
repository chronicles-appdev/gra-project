import investment from "/investment.png";
import feature1 from "/feature-1.jpg";
import { Link } from 'react-router-dom';

const Investment = () => {
  return (
    <section className="relative">
      <section className=" grid md:grid-rows-3 md:grid-flow-col md:absolute lg:left-80 top-[-80px] h-[40.625rem]">
        <div className="md:row-span-3 bg-gray text-white px-10  text-center md:text-left md:w-80">
          <div className="flex justify-center md:justify-start mt-10">
            <img src={investment} alt="" className="w-28" />
          </div>
          <h1 className="mt-10 text-xl sm:text-2xl md:w-60">
          OUR MISSION
          </h1>
          <div className="flex justify-center md:justify-start">
            <hr className="text-white mt-5 border-b-[2px] w-60 md:w-20 " />
          </div>

          <p className="mt-5 leading-8">
          To provide insurance broking and risk management services to meet customer needs with professional, exceptional service.
          </p>
          <div className="flex justify-center items-center md:justify-start mt-8 ">
          <Link to="/about">
  <button className="font-semibold py-4 px-8 rounded-2xl border border-white flex items-center justify-center gap-3 hover:bg-cream hover:text-gray hover:border-cream mb-14 md:mb-0">
    KNOW MORE <p className="text-xl">&gt;</p>{" "}
  </button>
</Link>
          </div>
        </div>

        <div className="md:col-span-2">
          <img src={feature1} alt="" className="w-full"/>
        </div>
        <div className="flex flex-col justify-center md:row-span-2 md:col-span-2 bg-[#f7f7f7f7]  py-10 px-8 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl">
          WE TAKE THE RISK OUT OF INSURANCE
          </h2>
          <div className="flex justify-center md:justify-start">
            <hr className="mt-5 border-b-[2px] w-40 " />
          </div>
          <p className="mt-5 text-sm sm:text-md">
          Our team of experienced professionals has a deep understanding of the Nigerian insurance market and access to key underwriting companies.
 We offer a range of insurance and reinsurance broking services for individuals and institutions across various industries, including Banking, Financial Services, Manufacturing, and more.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Investment;
