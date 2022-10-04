import './App.css';
import Header from './components/Header';
import logo from './imgs/logo.png'

function App() {
  return (
    <div>
      <Header />
      <main>
      <div
        class="flex flex-col-reverse align-middle justify-center m-auto md:max-w-4xl md:flex-row"
      >
        <div class="w-full md:first-letter:w-2/3 mr-24">
          <h1 id="h1Element" class="text-3xl font-bold mb-5 md:text-4xl">
            Type your Summoner Name to get stats!
          </h1>
          <p id="pElement" class="pl-4">Enter Below :)</p>
          <form id="mForm" class="mt-4">
            <input
              id="inputBox"
              type="text"
              placeholder="Summoner Name"
              class="w-full border-2 bordercolor-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5"
            />
            <button
              id="buttonSearch"
              class="bg-red-500 rounded w-full text-white py-3 px-4 mt-3 hover:bg-gray-600"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div class="w-full md:w-1/3 self-center">
          <img id="timmy"
            src={logo}
            alt=""
            class="m-auto mb-10"
          />
        </div>
      </div>
      <div id="playerInfo" class="container w-full font-bold mx-auto pt-8">
        <p></p>
      </div>
    </main>
    </div>
  );
}

export default App;
