import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import logo from "./components/logo.png";
import Footer from "./components/Footer";

function App () {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="bg-mainBackground font-sans min-h-screen">
      <Header />
      <main>
        <div className="flex flex-col-reverse align-middle justify-center m-auto md:max-w-4xl md:pt-16">
          <div className="w-full md:first-letter:w-2/3 mr-24 md:pl-16 hover:cursor-pointer">
              
              <img className="mx-auto " src={logo} alt="Teemo Logo" onClick={refreshPage}/>
            <Form />
          </div>
        </div>
      </main>
      <div className="sticky top-[100vh] pt-8">
      <Footer />
      </div>
    </div>
  );
}

export default App;