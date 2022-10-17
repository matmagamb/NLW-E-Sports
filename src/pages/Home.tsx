import { Header } from "../components/Header";
import csharp from "../assets/c-sharp.png";
import htmlIcon from "../assets/html-5.png";
import cssIcon from "../assets/css-3.png";
import javascriptIcon from "../assets/java-script.png";
import reactIcon from "../assets/react.png";
import unityIcon from "../assets/unity.png";

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
      <section className="bg-[rgba(0,0,0,0.7)]    py-5 backdrop-blur-sm text-center">
        <div className="">
          <h2 className="text-4xl mb-12">Technologies</h2>
          <article className="grid grid-flow-col justify-around">
            <div className="group flex flex-col items-center">
              <img src={htmlIcon} className="w-10" alt="html logo" />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">Html</p>
            </div>
            <div className="group flex flex-col items-center">
              <img src={cssIcon} className="w-10" alt=" Css logo" />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">CSS</p>
            </div>
            <div className="group flex flex-col items-center">
              <img
                src={javascriptIcon}
                className="w-10"
                alt="java Script Logo "
              />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">JavaScript</p>
            </div>
            <div className="group flex flex-col items-center">
              <img src={reactIcon} className="w-10" alt="react logo" />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">React</p>
            </div>
            <div className="group flex flex-col items-center">
              <img
                src={unityIcon}
                className="w-10 bg-[rgba(255,255,255,0.8)]"
                alt="Unity engine logo "
              />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">Unity</p>
            </div>
            <div className="group flex flex-col items-center">
              <img src={csharp} className="w-10" alt="C Sharp logo" />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-extralight ">C#</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
export default Home;
