import React, { useState, useRef} from "react";
import axios from "axios";
import { rankImages, masteryImages } from "./Images";
import { ref } from "../App";


function Form() {
  const [summonerSearchText, setSummonerSearchText] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [playerData, setPlayerData] = useState({});
  const [matchData, setMatchData] = useState("");
  const [champMastery, setChampMastery] = useState("");
  const formRef = useRef(null);
  const resultsRef = useRef(null)
  

  
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
      })
      .then(function () {
        axios.get(
          `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerData.id}?api_key=${API_KEY}`
        );
      })
      .then(function (res) {
        setChampMastery(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <div>
      <div ref={formRef} id="formDisplay">
        <form
          id="formSubmission"
          className="mt-4 px-6 text-center"
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
      <div ref={resultsRef}
        id="summonerProfile" // SUMMONER LEVEL, ICON, AND NAME
        className="container mt-20 mx-auto flex text-white font-sans"
      >
        <div id="ProfileIconLevel" className="pl-44">
          <img
            src="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/685.png"
            alt="Profile Icon"
            className="w-24 rounded-3xl ml-4 md:w-32 "
          />
          <div id="Level" className="-mt-3 h-5 md:-mt-4">
            <p className="ml-10  border-solid rounded-3xl bg-sumLevelBackground inline-block px-2 leading-5 md:ml-14 md:text-lg">
              417
            </p>
          </div>
        </div>
        <span className="text-4xl pl-8 pt-6 md:text-5xl">Allials</span>
      </div>
      <section ref={resultsRef} id="rankedStats" className="text-white ">
        {/* SUMMONER RANKED STATS */}
        <h2 className="text-center text-3xl  md:text-5xl md:ml-4 pt-8 md:pt-10">
          Ranked Season Stats
        </h2>
        <div className="grid grid-cols-2 gap-10 mx-auto text-center pt-8">
          <div className="">
            <h4 className="text-lg ml-16 font-bold">Ranked Solo/Duo</h4>
            <div className="pt-6 flex align-text-top">
            <img src={rankImages.Platinum} alt="" className="w-24 place-content-start"/>
              <p className="text-base md:pl-6 md:mt-8 ">Platinum 4 50LP</p>
              <p className="text-base pl-4 md:mt-8">Winrate: 55%</p>
            </div>
          </div>
          <div>
          <h4 className="text-lg ml-16 font-bold">Ranked Flex</h4>
          <div className="pt-6 flex align-text-top">
            <img src={rankImages.Platinum} alt="" className="w-24 place-content-start"/>
              <p className="text-base md:pl-6 md:mt-8 ">Platinum 4 50LP</p>
              <p className="text-base pl-4 md:mt-8">Winrate: 55%</p>
            </div>
          </div>
        </div>
      </section>
      <span>
        <h2 ref={resultsRef} className="text-3xl text-white text-center  md:text-5xl md:ml-10 pt-8 md:pt-14">
          Top 6 Highest Mastery Champions
        </h2>
      </span>
      <section ref={resultsRef} id="championInfo">
        {" "}
        {/*CHAMP MASTERY INFO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
        <div className="pt-10 grid gap-12 grid-cols-2 md:grid-cols-3 items-center ml-12 justify-center">
          <div id="1stChamp" className="text-white flex ">
            {" "}
            {/*CHAMPION 1!*/}
            <div className="place-self-start">
              <img
                src={masteryImages.Mastery7}
                alt="Champ Mastery Icon"
                className="w-10 -mb-8  relative"
              />
              <img
                src="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/Aatrox.png"
                alt="champion"
                className="w-36"
              />
              <p className="border-solid rounded-3xl inline-block bg-sumLevelBackground px-2 ml-5 md:text-lg">
                150k
              </p>
            </div>
            <div className=" pl-2  place-self-center mb-10">
              <h2 className="text-sm md:text-base">Champ Name</h2>
              <p className="text-xs md:text-sm">Last Played: 30+ days ago</p>
            </div>
          </div>
          <div id="2ndChamp" className="text-white flex ">
            {" "}
            {/*CHAMPION 2!*/}
            <div className="place-self-start">
              <img
                src={masteryImages.Mastery7}
                alt="Champ Mastery Icon"
                className="w-10 -mb-8  relative"
              />
              <img
                src="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/Aatrox.png"
                alt="champion"
                className="w-36"
              />
              <p className="border-solid rounded-3xl inline-block bg-sumLevelBackground px-2 ml-5 md:text-lg">
                150k
              </p>
            </div>
            <div className=" pl-2  place-self-center mb-10">
              <h2 className="text-sm md:text-base">Champ Name</h2>
              <p className="text-xs md:text-sm">Last Played: 30+ days ago</p>
            </div>
          </div>
          <div id="3rdChamp" className="text-white flex ">
            {" "}
            {/*CHAMPION 3!*/}
            <div className="place-self-start">
              <img
                src={masteryImages.Mastery7}
                alt="Champ Mastery Icon"
                className="w-10 -mb-8  relative"
              />
              <img
                src="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/Aatrox.png"
                alt="champion"
                className="w-36"
              />
              <p className="border-solid rounded-3xl inline-block bg-sumLevelBackground px-2 ml-5 md:text-lg">
                150k
              </p>
            </div>
            <div className=" pl-2  place-self-center mb-10">
              <h2 className="text-sm md:text-base">Champ Name</h2>
              <p className="text-xs md:text-sm">Last Played: 30+ days ago</p>
            </div>
          </div>
          <div id="4thChamp" className="text-white flex ">
            {" "}
            {/*CHAMPION 4!*/}
            <div className="place-self-start">
              <img
                src={masteryImages.Mastery7}
                alt="Champ Mastery Icon"
                className="w-10 -mb-8  relative"
              />
              <img
                src="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/Aatrox.png"
                alt="champion"
                className="w-36"
              />
              <p className="border-solid rounded-3xl inline-block bg-sumLevelBackground px-2 ml-5 md:text-lg">
                150k
              </p>
            </div>
            <div className=" pl-2  place-self-center mb-10">
              <h2 className="text-sm md:text-base">Champ Name</h2>
              <p className="text-xs md:text-sm">Last Played: 30+ days ago</p>
            </div>
          </div>
          <div id="5thChamp" className="text-white flex ">
            {" "}
            {/*CHAMPION 5!*/}
            <div className="place-self-start">
              <img
                src={masteryImages.Mastery7}
                alt="Champ Mastery Icon"
                className="w-10 -mb-8  relative"
              />
              <img
                src="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/Aatrox.png"
                alt="champion"
                className="w-36"
              />
              <p className="border-solid rounded-3xl inline-block bg-sumLevelBackground px-2 ml-5 md:text-lg">
                150k
              </p>
            </div>
            <div className=" pl-2  place-self-center mb-10">
              <h2 className="text-sm md:text-base">Champ Name</h2>
              <p className="text-xs md:text-sm">Last Played: 30+ days ago</p>
            </div>
          </div>
          <div id="6thChamp" className="text-white flex ">
            {" "}
            {/*CHAMPION 6!*/}
            <div className="place-self-start">
              <img
                src={masteryImages.Mastery7}
                alt="Champ Mastery Icon"
                className="w-10 -mb-8  relative"
              />
              <img
                src="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/Aatrox.png"
                alt="champion"
                className="w-36"
              />
              <p className="border-solid rounded-3xl inline-block bg-sumLevelBackground px-2 ml-5 md:text-lg">
                150k
              </p>
            </div>
            <div className=" pl-2  place-self-center mb-10">
              <h2 className="text-sm md:text-base">Champ Name</h2>
              <p className="text-xs md:text-sm">Last Played: 30+ days ago</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
