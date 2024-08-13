import { useState,useCallback,useEffect, useRef} from 'react'
import './App.css'
import InputBox from './Components/inputbox';


function App() {
  
  const passwordRef=useRef(null); 
  


  return (
    <>
      {/* <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-3 py-16 my-20 text-orange-600 bg-gray-800 ">
      <h1 className="my-3 text-center text-white text-4xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text"
          id='data'
              value={"Data"}
              className='outline-none w-full py-1 px-3'
              placeholder='Generated Password'
              readOnly
            ref={passwordRef}
          />
          <button
          onClick={copypasswordtoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5'
          >Copy</button>
        </div>
            
       
      </div> */}
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-3 py-16 my-20 text-orange-600 bg-gray-800 ">
      {/* <h1 className="my-3 text-center text-white text-4xl">Password Generator</h1> */}
      <InputBox data={'SHAIK MOHAMMED TAQI DANISH'}/>
      <InputBox data={'9704485220'}/>
      <InputBox data={'shaikmohammedtaqidanish88@gmail.com'}/>  
      <InputBox data={'srilakshmi high school'}/>
      </div>
    </>
  )
}

export default App
