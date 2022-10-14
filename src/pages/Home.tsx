import { Header } from "../components/Header";

function Home() {
  return (
    <div className="">
      <Header />
      
      <section className=" animate-fade-in-up flex flex-col h-[90vh]  items-center text-center pt-32">
        <div className="flex flex-col bg-[rgba(0,0,0,0.7)] h-[300px] w-[600px] justify-center items-center border-2 border-[rgba(255,255,255,0.7)]">
          <img
            src="https://github.com/matmagamb.png"
            alt="foto de perfil"
            className="w-44 rounded-full  border-[rgba(255,255,255,0.7)] border-2 -translate-y-24"
          />
          <div className="-translate-y-16">
            <h2 className="text-4xl mb-6"> Welcome to my Portfolio </h2>
            <span className="w-[500px]  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium libero quo beatae, ratione esse !
            </span>
          </div>
        </div>
      </section>
      <section className="bg-[rgba(0,0,0,0.7)] border border-red-600  h-[700px] py-5">
        <div className="">
          <p className="animate-fade-in-up">teste</p>

        </div>

      </section>
    </div>
  );
}
export default Home;
