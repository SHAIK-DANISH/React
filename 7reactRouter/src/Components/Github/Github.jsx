import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/SHAIK-DANISH')
    //     .then(response => response.json())
    //     .then(data => {console.log(data);
    //         setData(data)
    //                      })      
    //                      },[])

    
  return (<>
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github followers: {data.followers} </div>
    <img src={data.avatar_url} alt="avatar" className='mx-auto rounded-full'/>
    </>
  )
}

export default Github

export const githubloader= async()=> {
    const response=  await fetch('https://api.github.com/users/SHAIK-DANISH')
    return response.json()
}