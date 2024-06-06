import React from 'react'

const Card = (props) => {
  return (
    < div className=' cardpage'>
      <div className="card border shadow-2xl overflow-hidden  m-4 w-52" >
        <img src={props.img} alt=""  height={123} width={323}/>
        <h1 className=' font-bold h-1 mb-5 text-center'>{props.tittle}</h1>
        <div className='flex justify-around text-gray-600'>
        <p>{props.discription}</p>
        <p>${props.price}</p>
        </div>
      </div>
    </div>
  )
}


export default Card
