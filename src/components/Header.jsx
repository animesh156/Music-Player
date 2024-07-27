import { useState } from "react";

function Header({ showList, setShowList }) {
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
                className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-red-700 dark:hover:bg-red-500 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9H3.661l5.997-5.246a1 1 0 00-1.316-1.506l-8 7c-.008.007-.011.018-.019.025a.975.975 0 00-.177.24c-.018.03-.045.054-.059.087a.975.975 0 000 .802c.014.033.041.057.059.088.05.087.104.17.177.239.008.007.011.018.019.025l8 7a.996.996 0 001.411-.095 1 1 0 00-.095-1.411L3.661 11H19a1 1 0 000-2z"
                    stroke="#FFFFFF"
                  />
                </svg>
              </button>
            </div>

            <div>
              <p className="text-cyan-500 text-1xl">Playing</p>
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

          <div className="flex justify-center items-center">
            <ul className="list-disc text-cyan-300 ">
              <li >Apple</li>
              <li>Apple</li>
            </ul>
          </div>
        </div>

      ) : (
        <div className="grid grid-cols-3 gap-10 mt-4 content-around place-items-center">
          <div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-400 dark:hover:bg-gray-300 dark:focus:ring-red-300"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7"
                    stroke="#e60f77"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
            </button>
          </div>

          <div>
            <p className="text-cyan-500 text-1xl">Playing</p>
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
