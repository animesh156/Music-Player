import Header from "./components/Header";
import Player from "./components/Player";

import { useEffect, useRef, useState } from "react";
import songsData from "./data";
import Track from "./components/Track";

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
        <div className="w-72 mt-10 rounded-3xl h-full bg-white shadow-zinc-400 border-2 border-gray-200 shadow-lg dark:bg-black dark:border-gray-700 m-auto flex justify-center flex-col items-center top-10">
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

          <Track skipBack={skipBack} skipNext={skipNext} PlayPause={PlayPause} isPlaying={isPlaying} />
        </div>
      ) : (
        <div className="w-72 mt-10 rounded-3xl h-full bg-white shadow-zinc-400  border-gray-200 dark:bg-black dark:border-cyan-300 shadow-lg border-2 m-auto flex justify-center flex-col items-center top-10">
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
            setTotalTime={setTotalTime}
          />
        </div>
      )}
    </>
  );
}

export default App;
