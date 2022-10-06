import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import logo from "./imgs/logo.png";

function App() {
 
  return (
    <div>
      <Header />
      <main>
        <div className="flex flex-col-reverse align-middle justify-center m-auto md:max-w-4xl md:flex-row">
          <div className="w-full md:first-letter:w-2/3 mr-24">
            <h1 className="text-3xl font-bold mb-5 md:text-4xl">
              Type your Summoner Name to get stats!
            </h1>
           
            <Form />
            
          </div>
          <div className="w-full md:w-1/3 self-center">
            <img id="timmy" src={logo} alt="" className="m-auto mb-10" />
          </div>
        </div>
        <div className="container w-full font-bold mx-auto pt-8">
          
        </div>
      </main>
    </div>
  );
}

export default App;
