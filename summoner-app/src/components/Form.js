import React, { useState, useRef } from "react";
import axios from "axios";
import { rankImages, masteryImages } from "./Images";

function Form() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [playerData, setPlayerData] = useState({});
  const [rankedSolo, setRankedSolo] = useState({});
  const [rankedFlex, setRankedFlex] = useState({});
  const [champMastery, setChampMastery] = useState({});
  const formRef = useRef(null);
  const resultsRef = useRef(null);  
  const searchTextRef = useRef();
  const idRef = useRef(null)
  // const getChampMasteryURL = `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${userId}/top?api_key=${API_KEY}`;
  
  const getPlayerId = e => {
    e.preventDefault()
    const getSummonerURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchTextRef.current.value}?api_key=${API_KEY}`;
    // formRef.current.classList.add('hidden')
    // resultsRef.current.classList.remove('hidden')
     axios.get(getSummonerURL)
     .then(res => {
      console.log(res.data);
      setPlayerData(res.data)
    }).catch(err => err)
    
  // const getRankedData = () => {
  //    axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerData.id}?api_key=${API_KEY}`)
  //    .then(res => {
  //     console.log(res);
  //    })
  // }
}
  return (
    <div>
      <div ref={idRef} className="hidden">{JSON.stringify(playerData) ? <>{playerData.id}</> : <>nothing</>}</div>
      <div ref={formRef}>
        <form 
          className="mt-4 px-6 text-center"
          onSubmit={getPlayerId}
        >
          <input 
            type="text"
            ref={searchTextRef}
            // onSubmit={getRankedData}
            placeholder="Summoner Name"
            className=" text-center w-full md:w-4/5 border-2 bordercolor-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5 md:hover:bg-gray-300"
          ></input>
          <button
            className="bg-red-500 rounded w-full md:w-4/5  text-white py-3 md:px-4 mt-3 hover:bg-gray-600"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div ref={resultsRef} className="hidden">
        <div
          // SUMMONER LEVEL, ICON, AND NAME
          className="container mt-20 mx-auto flex text-white font-sans"
        >
          <div className="pl-44">
           {JSON.stringify(playerData) !== '{}' ? 
           <>
           <img
             src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/${playerData.profileIconId}.png`}
             alt="Profile Icon"
             className="w-24 rounded-3xl ml-4 md:w-32 "
             ></img>
           </>
          :
          <>
          <p>No Info</p>
          </>
          }
            
            <div id="Level" className="-mt-3 h-5 md:-mt-4">
                {JSON.stringify(playerData) !== '{}' ?
               <>
              <p className="ml-10  border-solid rounded-3xl bg-sumLevelBackground inline-block px-2 leading-5 md:ml-14 md:text-lg">
              {playerData.summonerLevel}
              </p>
               </> 
               :
               <><p className="ml-10  border-solid rounded-3xl bg-sumLevelBackground inline-block px-2 leading-5 md:ml-14 md:text-lg">
                ???</p></>
              }
            </div>
          </div>
         {JSON.stringify(playerData) !== '{}'?
         <>
          <span className="text-4xl pl-8 pt-6 md:text-5xl">{playerData.name}</span>
         </>
         :
         <><span className="text-4xl pl-8 pt-6 md:text-5xl">No Summoner Found</span></>
        }
        </div>
        <section className="text-white ">
          {/* SUMMONER RANKED STATS */}
          <h2 className="text-center text-3xl  md:text-5xl md:ml-4 pt-8 md:pt-10">
            Ranked Season Stats
          </h2>
          <div className="grid grid-cols-2 gap-10 mx-auto text-center pt-8">
            <div className="">
              <h4 className="text-lg ml-16 font-bold">Ranked Solo/Duo</h4>
              <div className="pt-6 flex align-text-top">
                <img
                  src={rankImages.Platinum}
                  alt=""
                  className="w-24 place-content-start"
                />
                <p className="text-base md:pl-6 md:mt-8 ">Platinum 4 50LP</p>
                <p className="text-base pl-4 md:mt-8">Winrate: 55%</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg ml-16 font-bold">Ranked Flex</h4>
              <div className="pt-6 flex align-text-top">
                <img
                  src={rankImages.Platinum}
                  alt=""
                  className="w-24 place-content-start"
                />
                <p className="text-base md:pl-6 md:mt-8 ">Platinum 4 50LP</p>
                <p className="text-base pl-4 md:mt-8">Winrate: 55%</p>
              </div>
            </div>
          </div>
        </section>
        <span>
          <h2 className="text-3xl text-white text-center  md:text-5xl md:ml-10 pt-8 md:pt-14">
            Top 6 Highest Mastery Champions
          </h2>
        </span>
        <section>
          {" "}
          {/*CHAMP MASTERY INFO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
          <div className="pt-10 pb-16 grid gap-12 grid-cols-2 md:grid-cols-3 items-center ml-12 justify-center">
            <div className="text-white flex ">
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
            <div className="text-white flex ">
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
            <div className="text-white flex ">
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
            <div className="text-white flex ">
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
            <div className="text-white flex ">
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
            <div className="text-white flex ">
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
    </div>
  );
} 

export default Form;
