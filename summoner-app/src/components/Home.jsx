import { React } from "react";
import logo from "./imgs/logo.png";
import Header from "./Header";
import Footer from "./Footer";
import { FormInput } from "./FormInput";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div id="body" className="bg-orange-50  dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 break-words leading-6 transition-colors duration-500 font-sans min-h-screen">
      <Header />
      <main className="lg:pt-6 3xl:pt-16">
        <div className="flex flex-col-reverse align-middle justify-center m-auto md:max-w-4xl md:pt-16">
          <div className="w-full md:pl-16 hover:cursor-pointer">
            <Link to="/">
              <img className="mx-auto lg:pb-6 " src={logo} alt="Teemo Logo" />
            </Link>
            <FormInput />
            <Outlet />
          </div>
        </div>
      </main>
      <div className="sticky top-[100vh] pt-8">
        <Footer />
      </div>
    </div>
  );
};
