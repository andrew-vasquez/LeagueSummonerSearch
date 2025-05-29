import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { rankImages, masteryImages } from "./Images";
import { championId } from "./ChampionId";
import { useParams } from "react-router-dom";
function PlayerData() {
  let { playerName } = useParams();

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [playerData, setPlayerData] = useState(null);
  const [rankedData, setRankedData] = useState(null);
  const [champMastery, setChampMastery] = useState(null);
  const [playerId, setPlayerId] = useState(null);
  const [queue1, setQueue1] = useState("");
  const [queue2, setQueue2] = useState("");
  const [champ1, setChamp1] = useState("");
  const [champ2, setChamp2] = useState("");
  const [champ3, setChamp3] = useState("");
  const [champ4, setChamp4] = useState("");
  const [champ5, setChamp5] = useState("");
  const [champ6, setChamp6] = useState("");
  const [gotData, setGotData] = useState(false);
  const resultsRef = useRef(null);
  const champIdArray = (id) => {
    return championId[id];
  };

  const masteryPoints = (points) => {
    let stringedPoints = points.toString();

    if (stringedPoints.length === 6) {
      return stringedPoints.slice(0, 3) + "," + stringedPoints.slice(3);
    } else if (stringedPoints.length === 4) {
      return stringedPoints.slice(0, 1) + "," + stringedPoints.slice(1);
    } else if (stringedPoints.length === 5) {
      return stringedPoints.slice(0, 2) + "," + stringedPoints.slice(1);
    } else if (stringedPoints.length === 7) {
      return (
        stringedPoints.slice(0, 1) + "." + stringedPoints.slice(1, 2) + " Mill."
      );
    } else if (stringedPoints.length === 8) {
      return (
        stringedPoints.slice(0, 2) + "." + stringedPoints.slice(2, 3) + " Mill."
      );
    } else return "No Data";
  };

  const lastPlayed = (unixDate) => {
    return new Date(unixDate).toLocaleString("en-us", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  };
  function masterLevel(level) {
    if (level === 7) {
      return (
        <img
          src={masteryImages.Mastery7}
          alt="Champ Mastery Icon"
          className="w-10 -mb-6 relative -inset-x-3 md:w-12"
        />
      );
    } else if (level === 6) {
      return (
        <img
          src={masteryImages.Mastery6}
          alt="Champ Mastery Icon"
          className="w-10 -mb-6 relative -inset-x-3 md:w-12"
        />
      );
    } else if (level === 5) {
      return (
        <img
          src={masteryImages.Mastery5}
          alt="Champ Mastery Icon"
          className="w-10 -mb-6 relative -inset-x-3 md:w-12"
        />
      );
    } else if (level === 4) {
      return (
        <img
          src={masteryImages.Mastery4}
          alt="Champ Mastery Icon"
          className="w-10 -mb-6 relative -inset-x-3 md:w-12"
        />
      );
    } else if (level === 3) {
      return (
        <img
          src={masteryImages.Mastery3}
          alt="Champ Mastery Icon"
          className="w-10 -mb-6 relative -inset-x-3 md:w-12"
        />
      );
    } else if (level === 2) {
      return (
        <img
          src={masteryImages.Mastery2}
          alt="Champ Mastery Icon"
          className="w-10 -mb-6 relative -inset-x-3 md:w-12"
        />
      );
    } else if (level === 1) {
      return (
        <img
          src={masteryImages.Mastery1}
          alt="Champ Mastery Icon"
          className="w-10 -mb-6 relative -inset-x-3 md:w-12"
        />
      );
    }
  }

  function soloImg(tier) {
    if (tier === "PLATINUM") {
      return (
        <img
          src={rankImages.Platinum}
          alt=""
          className="pb-5 w-20 md:w-36 place-self-center md:place-content-start"
        />
      );
    } else if (tier === "GOLD") {
      return (
        <img
          src={rankImages.Gold}
          alt=""
          className="pb-5 w-20 md:w-36 place-self-center md:place-content-start"
        />
      );
    } else if (tier === "SILVER") {
      return (
        <img
          src={rankImages.Silver}
          alt=""
          className="pb-5 w-20 md:w-36 place-self-center md:place-content-start"
        />
      );
    } else if (tier === "IRON") {
      return (
        <img
          src={rankImages.Iron}
          alt=""
          className="pb-5 w-20 md:w-36 place-self-center md:place-content-start"
        />
      );
    } else if (tier === "BRONZE") {
      return (
        <img
          src={rankImages.Bronze}
          alt=""
          className="pb-5 w-20 md:w-36 place-self-center md:place-content-start"
        />
      );
    } else if (tier === "DIAMOND") {
      return (
        <img
          src={rankImages.Diamond}
          alt=""
          className="pb-5 w-20 md:w-36 place-self-center md:place-content-start"
        />
      );
    } else if (tier === "MASTER") {
      return (
        <img
          src={rankImages.Master}
          alt=""
          className="pb-5 w-20  md:w-36 place-self-center md:place-content-start"
        />
      );
    } else if (tier === "GRANDMASTER") {
      return (
        <img
          src={rankImages.Grandmaster}
          alt=""
          className="pb-5 w-20 md:w-36 place-self-center md:place-content-start"
        />
      );
    } else if (tier === "CHALLENGER") {
      return (
        <img
          src={rankImages.Challenger}
          alt=""
          className="pb-5 w-20 md:w-36 place-self-center md:place-content-start"
        />
      );
    } else
      return (
        <img
          src={rankImages.Unranked}
          alt=""
          className="pb-5 w-20 md:w-36 place-self-center md:place-content-start"
        />
      );
  }

  const getChampMastery = async () => {
    const res = await axios.get(
      `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerId}/top?count=6&api_key=${API_KEY}`
    );
    setChampMastery(res.data);
    setChamp1(res.data[0]);
    setChamp2(res.data[1]);
    setChamp3(res.data[2]);
    setChamp4(res.data[3]);
    setChamp5(res.data[4]);
    setChamp6(res.data[5]);
  };

  const getPlayerId = async () => {
    const res = await axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY}`
    );
    setPlayerData(res.data);
    setPlayerId(res.data.id);
  };

  const getPlayerLeague = async () => {
    const res = await axios.get(
      `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerId}?api_key=${API_KEY}`
    );
    setRankedData(res.data);
    setQueue1(res.data[0]);
    setQueue2(res.data[1]);
  };

  useEffect(() => {
    if (playerId === null && gotData === false) {
      getPlayerId();
    } else if (playerId !== null && gotData === false) {
      getChampMastery();
      getPlayerLeague();
      setGotData(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerData, playerId, rankedData, champMastery]);

  return (
    <div>
      <div ref={resultsRef} className="">
        <div
          // SUMMONER LEVEL, ICON, AND NAME
          className="container mx-auto flex  font-sans md:justify-center md:ml-12 md:pr-10 3xl:pr-0 3xl:ml-36 "
        >
          <div className="pl-10 md:pl-44">
            {playerData ? (
              <>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/${playerData.profileIconId}.png`}
                  alt="Profile Icon"
                  className="w-24 rounded-3xl ml-4 md:w-32"
                ></img>
              </>
            ) : (
              <>
                <p>No Info</p>
              </>
            )}

            <div id="Level" className="-mt-3 h-5 md:-mt-4">
              {playerData ? (
                <>
                  <p className="ml-10  border-solid rounded-3xl bg-orange-400 dark:bg-sumLevelBackground inline-block px-2 leading-5 md:ml-14 md:text-lg">
                    {playerData.summonerLevel}
                  </p>
                </>
              ) : (
                <>
                  <p className="ml-10  border-solid rounded-3xl bg-orange-400 dark:bg-sumLevelBackground inline-block px-2 leading-5 md:ml-14 md:text-lg">
                    ???
                  </p>
                </>
              )}
            </div>
          </div>
          {playerData ? (
            <>
              <span className="text-2xl max-w-fit pl-8 pt-6 md:text-5xl ">
                {playerData.name}
              </span>
            </>
          ) : (
            <>
              <span className="text-4xl pl-8 pt-6 md:text-5xl">
                No Summoner Found
              </span>
            </>
          )}
        </div>
        <section className="md:pt-8 ">
          {/* SUMMONER RANKED STATS */}
          <h2 className="text-center text-3xl  md:text-5xl md:ml-4 pt-8 md:pt-10">
            Ranked Season Stats
          </h2>
          <div className="mx-auto text-center pt-8 flex justify-center md:pr-16">
            <div className="">
              <h4 className="text-lg  ml-11 md:ml-16 md:text-2xl font-bold md:pr-12">
                Ranked Solo/Duo
              </h4>
              <div className="pl-12 pt-6 flex flex-col align-text-top md:pr-12">
                {queue1.queueType === "RANKED_SOLO_5x5" ? (
                  <>
                    {soloImg(queue1.tier)}
                    <p className="text-sm md:text-lg md:mt-2">
                      {queue1.tier} {queue1.rank} {queue1.leaguePoints}LP
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      Wins: {queue1.wins}
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      Losses: {queue1.losses}
                    </p>
                  </>
                ) : queue2 === undefined ? (
                  <>
                    <img
                      src={rankImages.Unranked}
                      alt=""
                      className="pb-5 w-20 place-self-center md:place-content-start"
                    />
                    <p className="text-sm md:text-lg md:mt-2 ">
                      No Data
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      No Data
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      No Data
                    </p>
                  </>
                ) : (
                  <>
                    {soloImg(queue2.tier)}
                    <p className="text-sm md:text-lg md:mt-2 ">
                      {queue2.tier} {queue2.rank} {queue2.leaguePoints}LP
                    </p>
                    <p className="text-sm md:text-lg  md:mt-2">
                      Wins: {queue2.wins}
                    </p>
                    <p className="text-sm md:text-lg  md:mt-2">
                      Losses: {queue2.losses}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="pr-8">
              <h4 className="text-lg ml-11 font-bold md:text-2xl">Ranked Flex</h4>
              <div className="  pl-12 pt-6 flex flex-col">
                {queue1.queueType === "RANKED_FLEX_SR" ? (
                  <>
                    {soloImg(queue1.tier)}
                    <p className="text-sm md:text-lg md:mt-2 ">
                      {queue1.tier} {queue1.rank} {queue1.leaguePoints}LP
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      Wins: {queue1.wins}
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      Losses: {queue1.losses}
                    </p>
                  </>
                ) : queue2 === undefined ? (
                  <>
                    <img
                      src={rankImages.Unranked}
                      alt=""
                      className="pb-5 w-20 place-self-center md:place-content-start"
                    />
                    <p className="text-sm md:text-lg md:mt-2">
                      No Data
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      No Data
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      No Data
                    </p>
                  </>
                ) : (
                  <>
                    {soloImg(queue2.tier)}
                    <p className="text-sm md:text-lg md:mt-2 ">
                      {queue2.tier} {queue2.rank} {queue2.leaguePoints}LP
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      Wins: {queue2.wins}
                    </p>
                    <p className="text-sm md:text-lg md:mt-2">
                      Losses: {queue2.losses}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        <span>
          <h2 className="text-center text-3xl  md:text-5xl md:ml-4 pt-8 md:pt-10">
            Top 6 Highest Mastery Champions
          </h2>
        </span>
        <section>
          {" "}
          {/*CHAMP MASTERY INFO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
          {champMastery !== null ? (
            <div className="pt-10 pb-16 md:grid gap-12 grid-cols-2 md:grid-cols-3 mx-auto w-3/4 md:pl-20 3xl:pl-44">
              <div className=" flex ">
                {" "}
                {/*CHAMPION 1!*/}
                <div className="place-self-start">
                  {masterLevel(champ1.championLevel)}
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champIdArray(
                      champ1.championId
                    )}.png`}
                    alt="champion"
                    className="w-20 md:w-32"
                  />
                  <p className="border-solid rounded-3xl mx-auto bg-orange-400 dark:bg-sumLevelBackground px-3 md:text-lg md:inline-grid md:ml-4">
                    {masteryPoints(champ1.championPoints)}
                  </p>
                </div>
                <div className=" pl-2  place-self-center mb-10">
                  <h2 className="text-base md:text-xl">
                    {champIdArray(champ1.championId)}
                  </h2>
                  <p className="text-sm md:text-lg">
                    Last Played: {lastPlayed(champMastery[0].lastPlayTime)}
                  </p>
                </div>
              </div>
              <div className="flex ">
                {" "}
                {/*CHAMPION 2!*/}
                <div className="place-self-start">
                  {masterLevel(champ2.championLevel)}
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champIdArray(
                      champ2.championId
                    )}.png`}
                    alt="champion"
                    className="w-20 md:w-32"
                  />
                  <p className="border-solid rounded-3xl mx-auto bg-orange-400 dark:bg-sumLevelBackground px-4 md:text-lg md:inline-grid md:ml-4">
                    {masteryPoints(champ2.championPoints)}
                  </p>
                </div>
                <div className=" pl-2  place-self-center mb-10">
                  <h2 className="text-base md:text-xl">
                    {champIdArray(champ2.championId)}
                  </h2>
                  <p className="text-sm md:text-lg">
                    Last Played: {lastPlayed(champMastery[1].lastPlayTime)}
                  </p>
                </div>
              </div>
              <div className=" flex ">
                {" "}
                {/*CHAMPION 3!*/}
                <div className="place-self-start">
                  {masterLevel(champ3.championLevel)}
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champIdArray(
                      champ3.championId
                    )}.png`}
                    alt="champion"
                    className="w-20 md:w-32"
                  />
                  <p className="border-solid rounded-3xl mx-auto bg-orange-400 dark:bg-sumLevelBackground px-3 md:text-lg md:inline-grid md:ml-4">
                    {masteryPoints(champ3.championPoints)}
                  </p>
                </div>
                <div className=" pl-2  place-self-center mb-10">
                  <h2 className="text-base md:text-xl">
                    {champIdArray(champ3.championId)}
                  </h2>
                  <p className="text-sm md:text-lg">
                    Last Played: {lastPlayed(champMastery[2].lastPlayTime)}
                  </p>
                </div>
              </div>
              <div className=" flex ">
                {" "}
                {/*CHAMPION 4!*/}
                <div className="place-self-start">
                  {masterLevel(champ4.championLevel)}
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champIdArray(
                      champ4.championId
                    )}.png`}
                    alt="champion"
                    className="w-20 md:w-32"
                  />
                  <p className="border-solid rounded-3xl mx-auto bg-orange-400 dark:bg-sumLevelBackground px-3 md:text-lg md:inline-grid md:ml-4">
                    {masteryPoints(champ4.championPoints)}
                  </p>
                </div>
                <div className=" pl-2  place-self-center mb-10">
                  <h2 className="text-base md:text-xl">
                    {champIdArray(champ4.championId)}
                  </h2>
                  <p className="text-sm md:text-lg">
                    Last Played: {lastPlayed(champMastery[3].lastPlayTime)}
                  </p>
                </div>
              </div>
              <div className="flex ">
                {" "}
                {/*CHAMPION 5!*/}
                <div className="place-self-start">
                  {masterLevel(champ5.championLevel)}
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champIdArray(
                      champ5.championId
                    )}.png`}
                    alt="champion"
                    className="w-20 md:w-32"
                  />
                  <p className="border-solid rounded-3xl mx-auto bg-orange-400 dark:bg-sumLevelBackground px-3 md:text-lg md:inline-grid md:ml-4">
                    {masteryPoints(champ5.championPoints)}
                  </p>
                </div>
                <div className=" pl-2  place-self-center mb-10">
                  <h2 className="text-base md:text-xl">
                    {champIdArray(champ5.championId)}
                  </h2>
                  <p className="text-base md:text-lg">
                    Last
                     Played: {lastPlayed(champMastery[4].lastPlayTime)}
                  </p>
                </div>
              </div>
              <div className=" flex ">
                {" "}
                {/*CHAMPION 6!*/}
                <div className="content-center">
                  {masterLevel(champ6.championLevel)}
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champIdArray(
                      champ6.championId
                    )}.png`}
                    alt="champion"
                    className="w-20 md:w-32"
                  />
                  <p className="border-solid rounded-3xl mx-auto bg-orange-400 dark:bg-sumLevelBackground px-3 md:text-lg md:inline-grid md:ml-4">
                    {masteryPoints(champ6.championPoints)}
                  </p>
                </div>
                <div className=" pl-2  place-self-center mb-10">
                  <h2 className="text-base md:text-xl">
                    {champIdArray(champ6.championId)}
                  </h2>
                  <p className="text-base md:text-lg">
                    Last Played: {lastPlayed(champMastery[5].lastPlayTime)}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>no Data</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default PlayerData;
