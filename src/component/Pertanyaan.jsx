import React from 'react'
import { useParams } from 'react-router-dom';

const Pertanyaan = (props) => {
  const {id} = useParams()
   

  const Answer = (answer) => {
    switch(answer){
      case "yes":
        console.log("01")
        break;
      case "no":
        console.log("02")
        break;
      default:
        break;
    }
  }
  return (
    <div className='flex flex-col gap-24 justify-center items-center mt-16'>

        {/* Question Image */}
        <img src="https://picsum.photos/600/400/?random" alt="" className='w-[500px] h-64 rounded-xl object-cover'/>

        {/* Questions */}
        <h3 className='text-4xl font-bold text-indigo-900'>1. Props.Diagnose_Questions ?</h3>

        {/* Answer */}
        <div className='flex justify-center items-center gap-24'>
            <button className='bg-green-500 text-white w-32 h-16 rounded-xl font-semibold hover:bg-green-600' onClick={() => Answer("yes")}>Iya</button>
            <button className='bg-red-500 text-white w-32 h-16 rounded-xl font-semibold hover:bg-red-600' onClick={() => Answer("no")}>Tidak</button>
        </div>
    </div>
  )
}

export default Pertanyaan