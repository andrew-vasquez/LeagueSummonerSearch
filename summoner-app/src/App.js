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
        <div className="flex flex-col-reverse align-middle justify-center m-auto md:max-w-4xl md:pt-16">
          <div className="w-full md:first-letter:w-2/3 mr-24 md:pl-16">
            <h1 className="text-3xl font-bold mb-5 md:text-4xl md:pl-4">
              Type your Summoner Name to get stats!
            </h1>
           <img className="mx-auto md:pr-16" src={logo} alt="" srcset="" />
            <Form />
            
          </div>
          
        </div>
        <div className="container">
        </div>
      </main>
    </div>
  );
}

export default App;
