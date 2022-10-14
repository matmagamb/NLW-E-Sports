import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className=" w-full flex flex-1 justify-around p-6 sticky">
      <h1 className="text-xl">My Portfolio</h1>
      <div >
        <Link className="pl-10" to={"/"}>Home</Link>
        <Link className="pl-10" to={"/about"}>About</Link>
        <Link className="pl-10"  to={"/contact"}>Contact</Link>
      </div>
    </header>
  );
}
