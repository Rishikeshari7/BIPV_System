import React from 'react'
import received from "../../assets/received.png"
import send from "../../assets/send.png"

const DataBox = ({data}) => {
  return (
    <div className=' border-gradient border-[#E6C300] border-[2px] rounded-xl flex flex-col gap-5 relative text-white pl-3 pb-3 w-[164px] h-[161px]   bg-white '>
     
      <div className='flex items-center pr-2 justify-between pt-4'>
        <p className=' font-semibold text-5xl bg-clip-text text-transparent bg-text-gradient '>{data.quatity}</p>
        {data.value==="Increase"?(<img className=' size-7 aspect-square' src={received}></img>):(<img className=' size-7 aspect-square' src={send}></img>)}
      </div>
       <h1 className='text-xl pt-2 text-[#9E9E9E] font-normal'>{data.title}</h1>
      
    </div>
  )
}

export default DataBox
