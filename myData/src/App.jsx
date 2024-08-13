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
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-3 py-2 my-5 text-orange-600 bg-gray-800 ">
      {/* <h1 className="my-3 text-center text-white text-4xl">Password Generator</h1> */}
      <InputBox data={'SHAIK MOHAMMED TAQI DANISH'}/>
      <InputBox data={'9704485220'}/>
      <InputBox data={'shaikmohammedtaqidanish88@gmail.com'}/>  
      <InputBox data={'G Pulla Reddy Eng. college'}/>
      <InputBox data={'7.82'}/>
      <InputBox data={'SRI LAKSHMI HIGH SCHOOL'}/>
      <InputBox data={'8.3'}/>
      <InputBox data={'SRI CHAITANYA JUNIOR COLLEGE'}/>
      <InputBox data={'8.4'}/>
      <InputBox data={'Roja Street, Kurnool'}/>
      <InputBox data={'Andhra Pradesh'}/>
      <InputBox data={'Jan 2024 – Mar 2024'}/>
      <InputBox data={'Sakthi Auto Components Ltd. (SACL)'}/>
      <InputBox data={'June 2023 – July 2023'}/>
      <InputBox data={'Bharat Heavy Electricals Limited (BHEL)'}/>
      <InputBox data={'June 2022 – July 2022'}/>
      <InputBox data={'Web Development (Internshala)'}/>
      <InputBox data={'April 2022 – June 2022'}/>
      <InputBox data={'Salesforce Administrator Virtual Internship'}/>

      </div>
    </>
  )
}

export default App
