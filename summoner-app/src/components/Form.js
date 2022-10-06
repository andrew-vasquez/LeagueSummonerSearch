import React, { useState } from "react";
import axios from "axios";



const Form = () => {
  const [summonerSearchText, setSummonerSearchText] = useState("");
  const API_KEY  = process.env.REACT_APP_API_KEY;
  const [playerData, setPlayerData] = useState({});
//  console.log(summonerSearchText)
 function searchForPlayer(event){
  event.preventDefault()
  
  const APIUrlCall = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerSearchText}?api_key=${API_KEY}`
   axios.get(APIUrlCall).then(function (response){
     setPlayerData(response.data)
     console.log(playerData)
   }).catch(function (err){
    console.log(err)
   })
 }
 
  return (
     <div>
      <div className="">
    <form id="formSubmission" className="mt-4 px-6" onSubmit={e => searchForPlayer(e)}>
      <input
        type="text"
        placeholder="Summoner Name"
        className="w-full md:w-4/5 border-2 bordercolor-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5"
        onChange={e => setSummonerSearchText(e.target.value)}
      ></input>
      <button
        className="bg-red-500 rounded w-full md:w-4/5  text-white py-3 md:px-4 mt-3 hover:bg-gray-600"
        type="submit" 
      >
        Search
      </button>
      
    </form>
    </div>
   
    </div>
  );
};

export default Form;

