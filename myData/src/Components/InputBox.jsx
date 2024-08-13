import React from 'react'
import { useId } from 'react'
import { useRef } from 'react'

function InputBox({data}) {
    const myref= useRef(null);
    const myid= useId();
    const copydatatoClipboard=()=>{
        myref.current.select();
        window.navigator.clipboard.writeText(myref.current.value)};

  return (
    <>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text"
          id = {myid}
              value={data}
              className='outline-none w-full py-1 px-3'
              placeholder='Generated Password'
              readOnly
            ref={myref}
          />
          <button
          onClick={copydatatoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5'
          >Copy</button>
        </div>
    </>
  )
}

export default InputBox