import React, { useState } from "react";
import axios from "axios";


const Form = () => {
  const [summonerSearchText, setSummonerSearchText] = useState("");
  const API_KEY  = process.env.REACT_APP_API_KEY;
  
//  console.log(summonerSearchText)
 function searchForPlayer(event){
  event.preventDefault()
  
  const APIUrlCall = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerSearchText}?api_key=${API_KEY}`
   axios.get(APIUrlCall).then(function (response){
    console.log(response)
   }).catch(function (err){
    console.log(err)
   })
 }
 
  return (
    <form  className="mt-4" onSubmit={e => searchForPlayer(e)}>
      <input
        type="text"
        placeholder="Summoner Name"
        className="w-full border-2 bordercolor-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5"
        onChange={e => setSummonerSearchText(e.target.value)}
      ></input>
      <button
        className="bg-red-500 rounded w-full text-white py-3 px-4 mt-3 hover:bg-gray-600"
        type="submit" 
      >
        Search
      </button>
    </form>
  );
};

export default Form;
