/* eslint-disable react/no-unknown-property */
/* eslint-disable no-mixed-spaces-and-tabs */

import './App.css'


function App() {

  return (
    <div className='mt-10'>

<div className="w-72 rounded-3xl h-full bg-white border border-gray-200 shadow dark:bg-black dark:border-gray-700 m-auto flex justify-center flex-col items-center top-10">
 
  <div className='grid grid-cols-3 gap-10 mt-4 content-around place-items-center'>

<div>
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-red-700 dark:hover:bg-red-500 dark:focus:ring-blue-800">

<svg className='w-4 h-4' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9H3.661l5.997-5.246a1 1 0 00-1.316-1.506l-8 7c-.008.007-.011.018-.019.025a.975.975 0 00-.177.24c-.018.03-.045.054-.059.087a.975.975 0 000 .802c.014.033.041.057.059.088.05.087.104.17.177.239.008.007.011.018.019.025l8 7a.996.996 0 001.411-.095 1 1 0 00-.095-1.411L3.661 11H19a1 1 0 000-2z" stroke="#FFFFFF" /></svg>

</button>
</div>
  
<div>
<p className='text-cyan-500 text-1xl'>Playing</p>
</div>
    

    <div>
    
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-rose-400 dark:hover:bg-rose-300 dark:focus:ring-blue-800">
    <svg className='h-4 w-4' viewBox="0 0 24 24" color='white' fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</button>

    </div>

  

  </div>

  <a href="#">
    <img className="rounded-full w-40 h-40 mt-8 align-middle" src="https://cdn.pixabay.com/photo/2022/07/19/22/11/wallpaper-7333087_1280.png" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Song Name
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
     Singer Name
    </p>
   

    <div className='flex justify-center items-center mt-4 mb-4'>
    <input type="range" min={0} max={4} className='h-1' />
    </div>



    <div className='mt-8 flex flex-row justify-center gap-5 mb-7'>
 
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 bg-gradient-to-r from-cyan-400 to-red-500 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center me-2 dark:bg-slate-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <svg fill="#000000" className='h-4 w-4' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>backward</title>
<path d="M0 16q0 1.12 0.896 1.664l12 8q0.448 0.32 0.992 0.352t1.056-0.224q0.48-0.288 0.768-0.768t0.288-1.024v-16q0-0.544-0.288-1.024t-0.768-0.736-1.056-0.224-0.992 0.32l-12 8q-0.896 0.608-0.896 1.664zM16 16q0 1.12 0.896 1.664l12 8q0.448 0.32 0.992 0.352t1.056-0.224q0.48-0.288 0.768-0.768t0.288-1.024v-16q0-0.544-0.288-1.024t-0.768-0.736-1.056-0.224-0.992 0.32l-12 8q-0.896 0.608-0.896 1.664z"></path>
</svg>
<span className="sr-only">Icon description</span>
</button>

<button type="button" className="text-white bg-orange-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center me-2 dark:bg-orange-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg fill="#000000" className='w-4 h-4' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 17.804 17.804" xml:space="preserve">
<g>
	<g id="c98_play">
		<path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313
			c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04
			c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"/>
	</g>
	<g id="Capa_1_78_">
	</g>
</g>
</svg>
<span className="sr-only">Icon description</span>
</button>

<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none bg-gradient-to-r from-cyan-400 to-red-500 focus:ring-blue-300 font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center me-2 dark:bg-slate-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg fill="#000000" className='w-4 h-4' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>forward</title>
<path d="M0 24q0 0.544 0.288 1.056t0.768 0.736q0.48 0.256 1.056 0.224t0.992-0.32l12-8q0.896-0.608 0.896-1.696t-0.896-1.632l-12-8q-0.448-0.32-0.992-0.352t-1.056 0.224q-0.48 0.256-0.768 0.736t-0.288 1.024v16zM16 24q0 0.544 0.288 1.056t0.768 0.736q0.48 0.256 1.056 0.224t0.992-0.32l12-8q0.896-0.608 0.896-1.696t-0.896-1.632l-12-8q-0.448-0.32-0.992-0.352t-1.056 0.224q-0.48 0.256-0.768 0.736t-0.288 1.024v16z"></path>
</svg>
<span className="sr-only">Icon description</span>
</button>



    </div>

 
  </div>
</div>

    
    </div>
  )
}

export default App
