
const Header = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <header className="bg-red-500 p-4 mb-10 w-full">
      <div className="max-w-5xl m-auto">
        <div className="text-center text-xl font-bold text-white">
         <h1 onClick={refreshPage} className="hover:cursor-pointer">League of Legends Summoner Stats</h1>
        </div>
      </div>
    </header>
  )
}

export default Header