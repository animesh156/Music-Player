/* eslint-disable react/no-unknown-property */

import { useEffect, useRef, useState } from "react";
import Track from "./Track";

import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdVolumeOff } from "react-icons/io";

function Player({
  audioElm,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  songs,
  onPlaying,
  curTime,
  totalTime,
  setTotalTime,
}) {
  const [volume, setVolume] = useState(1);
  const clickRef = useRef();

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElm.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElm.current.currentTime = 0;
  };

  const skipNext = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElm.current.currentTime = 0;
    audioElm.current.play();
  };

  useEffect(() => {
    // Play or pause the audio element when isPlaying changes
    if (isPlaying) {
      audioElm.current.play();
    } else {
      audioElm.current.pause();
    }

    // Listen for when the song ends and play the next song automatically
    const handleSongEnd = () => {
      skipNext();
    };

    audioElm.current.addEventListener("ended", handleSongEnd);

    // Clean up the event listener when the component unmounts
    return () => {
      audioElm.current.removeEventListener("ended", handleSongEnd);
    };
  }, [isPlaying, currentSong]);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setTotalTime(formatTime(audioElm.current.duration)); // Update totalTime
      setCurTime(0); // Reset current time to 0
    };

    audioElm.current.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioElm.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
    };
  }, [currentSong]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100; // Convert to a value between 0 and 1
    setVolume(newVolume);
    audioElm.current.volume = newVolume; // Update the audio element's volume
  };

  const handleVolumeOn = () => {
    setVolume(0);
    audioElm.current.volume = 0;
  };

  const handleVolumeOff = () => {
    setVolume(1);
    audioElm.current.volume = 1;
  };

  return (
    <>
      <div
        w-72
       
        mt-10
        rounded-3xl="true"
        h-full
        bg-white
        border
        border-gray-200
        shadow
        dark:bg-black
        dark:border-cyan-300
        m-auto
        flex
        justify-center
        flex-col
        items-center
        top-10
      >
        <div className="flex justify-center">
         
            <img
              className="rounded-full w-40 h-40 mt-8 align-middle"
              src={currentSong.cover}
              alt="artist_img"
            />
         
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-emerald-700 text-center">
              {currentSong.title}
            </h5>
          </a>
          <p className="mb-3 font-bold text-gray-700 dark:text-fuchsia-800 text-center">
            {currentSong.singer}
          </p>

          <div className="navigation">
            <div
              className="navigation_wrapper"
              onClick={checkWidth}
              ref={clickRef}
            >
              <div
                className="seek_bar h-8"
                style={{ width: `${currentSong.progress + "%"}` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-between  text-sm mb-8 text-rose-600">
            <span>{curTime}</span>
            <span>{totalTime}</span>
          </div>

          <div className="volume-control mt-2 flex flex-row ">
            {volume === 0 ? (
              <IoMdVolumeOff onClick={handleVolumeOff} className="dark:text-white w-6 mr-1" />
            ) : (
              <IoMdVolumeHigh onClick={handleVolumeOn}  className="dark:text-white w-6 mr-1"/>
            )}

            <input
              id="volume"
              type="range"
              min="0"
              max="100"
              value={volume * 100} // Convert volume to percentage for the slider
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      </div>

      <Track PlayPause={PlayPause} skipBack={skipBack} skipNext={skipNext} isPlaying={isPlaying} />

      
    </>
  );
}

export default Player;
