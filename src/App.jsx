import Header from "./components/Header";
import Player from "./components/Player";

import { useEffect, useRef, useState } from "react";
import songsData from "./songs/data.js";

function App() {
  const [songs, setSong] = useState(songsData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [showList, setShowList] = useState(false);
  const [totalTime, setTotalTime] = useState("00:00");

  const [curTime, setCurTime] = useState("00:00");

  const audioElm = useRef();

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElm.current.currentTime = 0;
  };

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElm.current.currentTime = 0;
    audioElm.current.play();
  };

  useEffect(() => {
    if (isPlaying) audioElm.current.play();
    else audioElm.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) audioElm.current.play();
    else audioElm.current.pause();
  }, [skipNext, skipBack]);

  const onPlaying = () => {
    const duration = audioElm.current.duration;
    const ct = audioElm.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });

    let minutes = Math.floor(audioElm.current.duration / 60);
    let seconds = Math.floor(audioElm.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setTotalTime(musicTotalLength0);

    let currentMin = Math.floor(audioElm.current.currentTime / 60);
    let currentSec = Math.floor(audioElm.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setCurTime(musicCurrentT);
  };

  return (
    <>
      {showList ? (
        <div className="w-72 mt-10 rounded-3xl h-full bg-white border border-gray-200 shadow dark:bg-black dark:border-gray-700 m-auto flex justify-center flex-col items-center top-10">
          <audio
            src={currentSong.audio}
            ref={audioElm}
            onTimeUpdate={onPlaying}
          ></audio>

          <Header
            showList={showList}
            setShowList={setShowList}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            songs={songs}
            setIsPlaying={setIsPlaying}
            audioElm={audioElm}
            currentSong={currentSong}
          />

          <div className="mt-2 flex flex-row justify-center gap-5 mb-7">
            <button
              onClick={skipBack}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 bg-gradient-to-r from-cyan-400 to-red-500 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center me-2 dark:bg-slate-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                fill="#000000"
                className="h-4 w-4"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>backward</title>
                <path d="M0 16q0 1.12 0.896 1.664l12 8q0.448 0.32 0.992 0.352t1.056-0.224q0.48-0.288 0.768-0.768t0.288-1.024v-16q0-0.544-0.288-1.024t-0.768-0.736-1.056-0.224-0.992 0.32l-12 8q-0.896 0.608-0.896 1.664zM16 16q0 1.12 0.896 1.664l12 8q0.448 0.32 0.992 0.352t1.056-0.224q0.48-0.288 0.768-0.768t0.288-1.024v-16q0-0.544-0.288-1.024t-0.768-0.736-1.056-0.224-0.992 0.32l-12 8q-0.896 0.608-0.896 1.664z"></path>
              </svg>
              <span className="sr-only">Icon description</span>
            </button>

            {!isPlaying ? (
              <button
                type="button"
                onClick={PlayPause}
                className="text-white bg-orange-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center me-2 dark:bg-orange-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  fill="#000000"
                  className="w-4 h-4"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 17.804 17.804"
                  xml:space="preserve"
                >
                  <g>
                    <g id="c98_play">
                      <path
                        d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313
        c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04
        c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"
                      />
                    </g>
                    <g id="Capa_1_78_"></g>
                  </g>
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={PlayPause}
                className="text-white bg-orange-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center me-2 dark:bg-orange-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="h-4 w-4"
                  viewBox="0 0 277.338 277.338"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665
		c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"
                    />
                    <path
                      d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652
		V45.665C263.109,20.454,246.394,0,225.78,0z"
                    />
                  </g>
                </svg>
              </button>
            )}

            <button
              type="button"
              onClick={skipNext}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none bg-gradient-to-r from-cyan-400 to-red-500 focus:ring-blue-300 font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center me-2 dark:bg-slate-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                fill="#000000"
                className="w-4 h-4"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>forward</title>
                <path d="M0 24q0 0.544 0.288 1.056t0.768 0.736q0.48 0.256 1.056 0.224t0.992-0.32l12-8q0.896-0.608 0.896-1.696t-0.896-1.632l-12-8q-0.448-0.32-0.992-0.352t-1.056 0.224q-0.48 0.256-0.768 0.736t-0.288 1.024v16zM16 24q0 0.544 0.288 1.056t0.768 0.736q0.48 0.256 1.056 0.224t0.992-0.32l12-8q0.896-0.608 0.896-1.696t-0.896-1.632l-12-8q-0.448-0.32-0.992-0.352t-1.056 0.224q-0.48 0.256-0.768 0.736t-0.288 1.024v16z"></path>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-72 mt-10 rounded-3xl h-full bg-white border border-gray-200 shadow dark:bg-black dark:border-gray-700 m-auto flex justify-center flex-col items-center top-10">
          <audio
            src={currentSong.audio}
            ref={audioElm}
            onTimeUpdate={onPlaying}
          ></audio>

          <Header showList={showList} setShowList={setShowList} />
          <Player
            curTime={curTime}
            totalTime={totalTime}
            onPlaying={onPlaying}
            songs={songs}
            setSong={setSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            audioElm={audioElm}
          />
        </div>
      )}
    </>
  );
}

export default App;
