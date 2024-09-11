import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";


function Track({PlayPause,skipBack,skipNext,isPlaying}) {
  return (
    <div className="mt-4 flex flex-row justify-center gap-5 mb-5">
        <button
          onClick={skipBack}
          type="button"
          className=" dark:bg-dark border-2 border-red-500 dark:border-green-600 focus:outline-none  font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2 "
        >
          <TbPlayerTrackPrevFilled className="dark:text-orange-400" />
          
        </button>

        {!isPlaying ? (
          <button
            type="button"
            onClick={PlayPause}
            className="  dark:bg-black   border-cyan-700 border-2    font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2  "
          >
            <FaPlay className="text-black dark:text-orange-400 " />
           
          </button>
        ) : (
          <button
            type="button"
            onClick={PlayPause}
            className="  border-cyan-700 border-2 font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2 dark:bg-black "
          >
            <FaPause className="text-black dark:text-orange-400" />
          </button>
        )}

        <button
          type="button"
          onClick={skipNext}
          className="text-white  focus:outline-none dark:bg-black border-2 border-red-500 dark:border-green-600  font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2  "
        >
          <TbPlayerTrackNextFilled className="text-black dark:text-orange-500" />
        </button>
      </div>
  )
}

export default Track