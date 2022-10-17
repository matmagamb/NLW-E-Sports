import { Header } from "../components/Header";
import csharp from "../assets/c-sharp.png";
import htmlIcon from "../assets/html-5.png";
import cssIcon from "../assets/css-3.png";
import javascriptIcon from "../assets/java-script.png";
import reactIcon from "../assets/react.png";
import unityIcon from "../assets/unity.png";
import game from "../assets/game.jpg";

function Home() {
  return (
    <div className="">
      <Header />

      <section className="flex flex-col h-[90vh]  items-center text-center pt-32">
        <div className="flex flex-col bg-[rgba(0,0,0,0.7)] h-[300px] w-[600px] justify-center items-center border-2 border-[rgba(255,255,255,0.7)]">
          <img
            src="https://github.com/matmagamb.png"
            alt="foto de perfil"
            className="w-44 rounded-full  border-[rgba(255,255,255,0.7)] border-2 -translate-y-24"
          />
          <div className="-translate-y-16">
            <h2 className="text-xl mb-6"> Welcome to my Portfolio </h2>
            <span className="w-[500px]  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium libero quo beatae, ratione esse !
            </span>
          </div>
        </div>
      </section>
      <div className="backdrop-blur-sm divide-y divide-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.7)]">
        <section className="py-5 text-center">
          <div className="">
            <h2 className="text-4xl mb-12">Technologies</h2>
            <article className="grid grid-flow-col justify-around">
              <div className="group flex flex-col items-center">
                <img src={htmlIcon} className="w-10" alt="html logo" />
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">
                  Html
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <img src={cssIcon} className="w-10" alt=" Css logo" />
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">
                  CSS
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <img
                  src={javascriptIcon}
                  className="w-10"
                  alt="java Script Logo "
                />
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">
                  JavaScript
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <img src={reactIcon} className="w-10" alt="react logo" />
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">
                  React
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <img
                  src={unityIcon}
                  className="w-10 bg-[rgba(255,255,255,0.8)]"
                  alt="Unity engine logo "
                />
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">
                  Unity
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <img src={csharp} className="w-10" alt="C Sharp logo" />
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">
                  C#
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="flex justify-center items-center   text-center overflow-hidden">
            <div className=" flex flex-col justify-center h-[700px]  w-full  ">
          <div className=" flex h-[300px]  gap-[200px] justify-center">
              <div className=" hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center w-[450px]">
                <h2 className="text-4xl font-bold mb-6 bg-[rgba(255,0,0,0.5)] w-auto rounded-full px-6">Games</h2>
                <p className="text-md  ">
                  Lorem Ipsu dolor set ipsum lorem Ipsu dolor set ipsum Lorem
                  Ipsu Lorem Ipsu dolor set ipsum lorem Ipsu dolor set ipsum
                  Lorem
                </p>
              </div>
              <span className="text-4xl font-bold flex flex-col justify-center">
                or
              </span>

              <div className=" hover:scale-105 transition-all duration-300 flex flex-col items-center  justify-center w-[450px]">
                <h2 className="text-4xl font-bold mb-6 bg-[rgba(0,4,255,0.5)] w-auto px-6 rounded-full ">web/mobile</h2>
                <p className="text-md  ">
                  Lorem Ipsu dolor set ipsum lorem Ipsu dolor set ipsum Lorem
                  Ipsu Lorem Ipsu dolor set ipsum lorem Ipsu dolor set ipsum
                  Lorem
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;
