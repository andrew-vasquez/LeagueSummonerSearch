import { ThemeToggleButton } from "./ThemeToggleButton";
import { Link } from "react-router-dom";
const Header = () => {
 

  return (
    <header className="bg-red-500 p-4 mb-10 w-full dark:bg-sky-700 rounded-sm">
      <div className="container mx-auto flex flex-row items-center justify-center">
        <div className="text-lg md:pr-8 md:text-2xl font-bold text-white">
          <Link to="/">
            <h1 className="hover:cursor-pointer text-center pl-10 break-before-auto md:pr-10 md:ml-12">
              League of Legends
               Summoner Stats
            </h1>
          </Link>
        </div>
        <div className="">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
