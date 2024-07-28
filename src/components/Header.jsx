import { useEffect, useState } from "react";
import songsData from "../data";

function Header({
  showList,
  setShowList,
  isPlaying,
  setIsPlaying,
  audioElm,
  setCurrentSong,
  songs,
}) {
  const handle = () => {
    setShowList(!showList);
  };

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
                className="text-white  bg-sky-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-red-700 dark:hover:bg-red-500 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9H3.661l5.997-5.246a1 1 0 00-1.316-1.506l-8 7c-.008.007-.011.018-.019.025a.975.975 0 00-.177.24c-.018.03-.045.054-.059.087a.975.975 0 000 .802c.014.033.041.057.059.088.05.087.104.17.177.239.008.007.011.018.019.025l8 7a.996.996 0 001.411-.095 1 1 0 00-.095-1.411L3.661 11H19a1 1 0 000-2z"
                    stroke="#000000"
                  />
                </svg>
              </button>
            </div>

            <div>
              <h1 className="text-gray-950 text-1xl font-extrabold"> Songs</h1>
            </div>

            <div>
              <button
                type="button"
                onClick={handle}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-rose-400 dark:hover:bg-rose-300 dark:focus:ring-blue-800"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  color="white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
                  setIsPlaying(!isPlaying);

                  setTimeout(() => {
                    audioElm.current.currentTime = 0;
                    audioElm.current.play();
                  }, 500);
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
              className="text-white bg-zinc-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-400 dark:hover:bg-gray-300 dark:focus:ring-red-300"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7"
                    stroke="#e60f77"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>
            </button>
          </div>

          <div>
            <p className="text-rose-400 font-extrabold text-1xl">Songs</p>
          </div>

          <div>
            <button
              type="button"
              onClick={handle}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-rose-400 dark:hover:bg-rose-300 dark:focus:ring-blue-800"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                color="white"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
