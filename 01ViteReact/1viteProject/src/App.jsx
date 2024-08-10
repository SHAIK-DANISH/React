import React,{useState} from 'react'

function App() {
  const [color,setColor]=useState('olive');
  return (
    
    <div className="w-full h-screen justify-center items-center flex flex-col"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-20 insert-x-0 px-4   ">
        
        <div className= "flex flex-wrap justify-center gap-4 sahdow-lg bg-white px-2 py-2  rounded-3xl ">
        <button 
        onClick= {()=> setColor('red')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "red"}}>Red
        </button>  
        <button 
        onClick= {()=> setColor('Green')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Green"}}>Green
        </button>
        <button 
        onClick= {()=> setColor('Blue')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Blue"}}>Blue
        </button>
        <button 
        onClick= {()=> setColor('Purple')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Purple"}}>Purple
        </button>
        <button 
        onClick= {()=> setColor('Black')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "black"}}>Black
        </button>
        <button 
        onClick= {()=> setColor('Olive')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Olive"}}>Olive
        </button>
        <button 
        onClick= {()=> setColor('Lavender')}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "Lavender"}}>Lavender
        </button>
        </div>
      </div>

    </div>
      
  )
}

export default App
