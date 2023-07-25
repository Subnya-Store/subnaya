import React, { useState } from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'


export default function
  Login({Setacc}) {

  return (
    <div>
      <h4 className=' text-center text-4xl text-black  font-bold font-Montserrat mb-3 capitalize'>login</h4>
      <form className=''>
        <div className=' relative mt-4'>
          <label className=' font-bold font-Montserrat  capitalize '>Email</label>
          <input placeholder='Johndoe@gmail.com' className='font-Montserrat py-2 px-3 mt-2 text-sm bg-transparent border-2  border-pinkColor  font-light  w-full placeholder:text-black   focus:outline-none' />
          <div className=' absolute  right-3 top-11 '>
            <AiOutlineMessage className='text-base text-pinkColor' />
          </div>
        </div>

        <div className=' relative mt-4'>
          <label className=' font-bold font-Montserrat  capitalize '>Password</label>
          <input placeholder='***********' className='font-Montserrat  pt-2 px-3 mt-2  text-lg bg-transparent border-2  border-pinkColor  font-light  w-full placeholder:text-black   focus:outline-none' />
          <div className=' absolute  right-3 top-11 '>
            <AiOutlineEye className='text-base text-pinkColor' />
          </div>
        </div>
        <button className='mt-5 font-bold font-Montserrat border-2  py-3 text-white px-6 bg-pinkColor  capitalize'>sign up</button>
      </form>
      <div className=' cursor-pointer font-medium mt-3 font-Montserrat' onClick={()=>Setacc(false)}>create a account</div>
    </div>
  )
}
