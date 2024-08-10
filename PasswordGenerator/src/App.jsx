import { useState,useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [num, allowedNum]=useState(false);
  const [char, allowedChar]=useState(false);
  const passwordRef=useRef(null); 
  const passwordGenerator=()=>{
    
    let numChars='0123456789';
    let alphaChars='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let specialChars='!@#$%^&*()_+';
    let allChars=alphaChars;
    if(num) allChars+=numChars;
    if(char) allChars+=specialChars;
    let password='';
    for(let i=0;i<passwordLength;i++){
      password+=allChars.charAt(Math.floor(Math.random()*allChars.length));
    }
    setPassword(password);
  }
  const copypasswordtoClipboard=()=>{
    passwordRef.current.select();
    // document.execCommand('copy');
    window.navigator.clipboard.writeText(passwordRef.current.value);}
  useEffect(() => {
    passwordGenerator();
  }, [passwordLength,num,char])

  return (
    <>

      {/* <h1 className="title text-4xl text-center text-white">Password Generator</h1> */}
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-3 py-16 my-20 text-orange-600 bg-gray-800 ">
      <h1 className="my-3 text-center text-white text-4xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text"
              value={password}
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
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" 
            min = {8}
            max={50}
            value={passwordLength}
            className='cursor-pointer'
            onChange={(e)=>setPasswordLength(e.target.value)}
            name="" id="" />
            <label htmlFor="">Password Length: {passwordLength}</label>
           
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={num}
            id='num'
            onChange={()=>{allowedNum((prev)=>!prev);}}
            />
            <label htmlFor="num">Numbers</label></div>
            <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={char}
            id='char'
            onChange={()=>{allowedChar(!char);}}
            />
            <label htmlFor="char">Characters</label></div>
            
        </div>
      </div>
    </>
  )
}

export default App
