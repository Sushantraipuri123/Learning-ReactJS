import React from 'react'
import { useState, useEffect } from 'react'

const Card = () => {

    const [data, setData] = useState([])

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((res) => setData(res))
    }, []);
    
    console.log(data);
  return (
    <div className='flex flex-wrap'>
        {data.map(post => (
            <div key={post.id}>
                <div className="card  border-2 overflow-auto m-3 p-3 w-52">
                        <h1 className=' text-3xl font-semibold'> {post.title} </h1>
                        <p className=' text-slate-700'>{post.body}</p>
                        <p className='mt-2'>Id <strong>{post.id}</strong></p>
                    </div>
                </div>
                ))}
      </div>
  )
}

export default Card
