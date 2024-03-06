import team from "/people.png";
import trust from "/handshake.png";
import consistency from "/consistency.png";
import excellence from "/excellence.png";
import focus from "/target.png";

const Values = () => {
  return (
    <section className="w-full bg-white text-black py-20">
      <div className="w-full text-center">
        <h1 className="text-4xl mb-5"> OUR CORE VALUES</h1>
        <p className="text-xl">DRIVING TECHNOLOGY FOR LEADING BRANDS</p>
        <hr className="w-20 mx-auto mt-4 border-t-[2px]" />
      </div>
      <div className="grid grid-cols-2 md:flex gap-6 justify-around items-center p-6 mt-5">
        <div className="flex flex-col items-center justify-center gap-3">
          <img src={trust} alt="" className="w-20" />
          <p className="font-semibold text-lg">Trust</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <img src={consistency} alt="" className="w-20" />
          <p className="font-semibold text-lg">Consistency</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <img src={team} alt="" className="w-20" />
          <p className="font-semibold text-lg">Team</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <img src={excellence} alt="" className="w-20" />
          <p className="font-semibold text-lg">Excellence</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <img src={focus} alt="" className="w-20 " />
          <p className="font-semibold text-lg">Focus</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
