import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PlayerData from "./PlayerData"
const PlayerPage = () => {
  return (
    <div id="body" className="bg-orange-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 break-words leading-6 transition-colors duration-500 font-sans min-h-screen">
      <Header />
      <main>
        <div className="flex flex-col-reverse align-middle justify-center m-auto md:max-w-4xl md:pt-16">
          
        </div>
        <PlayerData />
      </main>
      <div className="sticky top-[100vh] pt-8">
        <Footer />
      </div>
    </div>
  );
};

export default PlayerPage;
