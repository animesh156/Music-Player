import { useEffect, useState } from "react";
import songsData from "../data";
import { FaArrowLeft } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

function Header({
  showList,
  setShowList,
  isPlaying,
  setIsPlaying,
  audioElm,
  setCurrentSong,
  songs,
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handle = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleBtn = () => {
    setShowList(!showList);
  };

  return (
    <>
      {showList ? (
        <div>
          <div className="grid grid-cols-3 gap-10 mt-4 content-around place-items-center">
            <div>
              <button
                onClick={handleBtn}
                type="button"
                className="dark:hover:shadow-sm mb-5 dark:hover:shadow-red-500 dark:bg-black border-red-600 focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2  border-2 "
              >
                <FaArrowLeft className="dark:text-orange-500" />
              </button>
            </div>

            <div>
              <h1 className="text-gray-950 dark:text-sky-500 mb-5 text-1xl font-extrabold">
                Songs
              </h1>
            </div>

            <div>
              <button
                type="button"
                onClick={handle}
                className="    focus:outline-none mb-5  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-black border-2 border-red-500  "
              >
                <FaListUl className="dark:text-orange-500" />
              </button>
            </div>
          </div>

          <div className="overflow-y-scroll h-80 overscroll-none  scrollbar-thin scrollbar-thumb-black scrollbar-track-sky-300">
            {songsData.map((val) => (
              <div
                className="flex justify-around items-center h-14 p-2 rounded-lg hover:bg-red-100  bg-red-200 mb-4 mt-4"
                id={val.id}
                onClick={() => {
                  const index = songs.findIndex((x) => x.title === val.title);

                  setCurrentSong(songs[index]);

                  audioElm.current.currentTime = 0;
                  audioElm.current.play();
                  setIsPlaying(true);
                }}
              >
                <div>
                  <img src={val.cover} alt="" className="h-8 w-8 rounded-l" />
                </div>

                <div className="text-center">
                  <li className="list-none" key={val.id}>
                    <h1 className="font-serif text-sm">{val.title}</h1>
                    <p className="text-sm">{val.singer}</p>
                  </li>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10 mt-4 content-around place-items-center">
          <div>


            


            <button
              type="button"
              onClick={toggleDarkMode}
              className="  border-red-500   focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-black border-2 dark:border-yellow-600 "
            >
              {isDarkMode ? <CiLight size={15} className="dark:text-orange-500" /> : <CiDark size={15} className="dark:text-orange-500" />
              }
              
            </button>

          
          </div>

          <div>
            <p className="text-rose-400 font-extrabold text-1xl">Songs</p>
          </div>

          <div>
            <button
              type="button"
              onClick={handle}
              className=" border-red-500  focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-black border-2 dark:border-yellow-600"
            >
              <FaListUl className="dark:text-orange-500" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
