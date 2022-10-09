import React, { useState } from "react";
import axios from "axios";
import rankImages from "./Images";
const Form = () => {
  const [summonerSearchText, setSummonerSearchText] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [playerData, setPlayerData] = useState({});
  const [matchData, setMatchData] = useState("");
  const [champMastery, setChampMastery] = useState("")
  const [hidden, setHidden] = useState(true);
  function searchForPlayer(event) {
    event.preventDefault();

    const summonerDataURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerSearchText}?api_key=${API_KEY}`;

    axios
      .get(summonerDataURL)
      .then(function (res) {
        setPlayerData(res.data);

        // console.log(playerData.id);
      })
      .catch(function (err) {
        console.log(err);
      })
      .then(function () {
        axios
          .get(
            `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerData.id}?api_key=${API_KEY}`
          )
          .then(function (res) {
            setMatchData(res.data[0]);
            console.log(matchData);
          })
          .catch(function (err) {
            console.log(err);
          });
      }).then(function(){
        axios.get(`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerData.id}?api_key=${API_KEY}`)
      }).then(function(res){
        setChampMastery(res)
      }).catch(function (err){
        console.log(err);
      })
  }
 
  return (
    <div>
      <div id="formDisplay">
        <form
          id="formSubmission"
          className="mt-4 px-6 md:pl-16"
          onSubmit={(e) => searchForPlayer(e)}
        > 

          <input
            type="text"
            placeholder="Summoner Name"
            className="w-full md:w-4/5 border-2 bordercolor-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5"
            onChange={(e) => setSummonerSearchText(e.target.value)}
          ></input>
          <button
            className="bg-red-500 rounded w-full md:w-4/5  text-white py-3 md:px-4 mt-3 hover:bg-gray-600"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div id="summonerProfile" className="container mt-20 mx-auto flex text-white font-sans">
        <div id="ProfileIconLevel">
        <img src="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/685.png" alt="Profile Icon" className="w-24 rounded-3xl ml-4 md:w-32 " />
        <div id="Level" className="-mt-3 h-5 md:-mt-4">
        <p className="ml-10  border-solid rounded-3xl bg-sumLevelBackground inline-block px-2 leading-5 md:ml-16 md:text-lg">417</p>
        </div>
        </div>
        <span className="text-4xl pl-8 pt-6 md:text-5xl">Allials</span>
        <img src="" alt="" />
      </div>
        <div id="championInfo" className="block break-all pt-10">
          <h2 className="text-2xl text-white text-center md:text-left md:text-4xl">Champion Info</h2>
          <img src="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/Aatrox.png" alt="champion" className="ml-4 pt-8" />
        </div>
    </div>
  );
};


export default Form;
