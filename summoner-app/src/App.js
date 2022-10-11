import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import logo from "./components/logo.png";

function App () {

  return (
    <div className="bg-mainBackground font-sans">
      <Header />
      <main>
        <div className="flex flex-col-reverse align-middle justify-center m-auto md:max-w-4xl md:pt-16">
          <div className="w-full md:first-letter:w-2/3 mr-24 md:pl-16">
              
              <img className="mx-auto " src={logo} alt="Teemo Logo" />
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;