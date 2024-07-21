import React, { useEffect , useState ,  } from 'react'


import { useLoaderData } from 'react-router-dom'

export const Github = () => {
    const data = useLoaderData()
    // const [data , setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/pritamawatade')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (

    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github foloowers: {data.followers}
    <img className='text-center' src={data.avatar_url} alt="Git pic"  width={300}/>
    </div>
  )
}

export default Github

export const githubIfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/pritamawatade')
    return response.json()
}