import chart from "/chart.png"
import feature2 from "/feature-2.jpg"

const investment2 = () => {
  return (
    <section className="relative">
      <section className="grid md:grid-rows-3 md:grid-flow-col md:absolute lg:right-80 top-[670px] h-[650px]">
        
          <div className="md:col-span-2 order-2 md:order-1">
           <img src={feature2} alt="" />
          </div>
          <div className="flex flex-col justify-center md:row-span-2 md:col-span-2 bg-[#f7f7f7f7] py-10 px-8 order-3 md:order-1">
            <h1 className="text-2xl">We Help Your Track Your Investment Peformance</h1>
            <hr className="w-40 mt-5 border-b-[2px] "/>
            <p className="mt-5">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
          </div>
          <div className="md:row-span-3 bg-gray text-white px-10 py-6 text-center md:text-left md:w-80 mt-80 md:mt-0 order-1 md:order3">
            <div className="flex justify-center md:justify-start mt-10">
                <img src={chart} alt="" className="w-28"/>
            </div>
          <h1 className="mt-16 text-xl sm:text-2xl md:w-60">TRACK YOUR INVESTMENT WITH OUR EXPERTS</h1>
          <div className="flex justify-center lg:justify-start">
         <hr className="text-white mt-5 border-b-[2px] w-60 lg:w-20 "/>
         </div>
     
          <p className="mt-5 leading-8">Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
          <div className="flex justify-center items-center md:justify-start mt-8 md:mt-0">
          <button className="font-semibold py-4 px-8 rounded-2xl border border-white flex items-center justify-center gap-3 hover:bg-cream hover:text-gray hover:border-cream mb-14">KNOW MORE <p className="text-xl">&gt;</p> </button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default investment2
