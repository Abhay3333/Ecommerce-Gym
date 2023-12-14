import React from 'react'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
  <div >
    <div className="flex items-center justify-center mb-10  w-1/2 mx-auto text-center">
  <h1 className="text-3xl font-semibold text-slate-50 ">SHOP BY CATEGORY</h1>
  </div>
  
  <div className='flex'>
  <div className='flex items-center justify-center mx-auto shadow'>
  <div className='box-grid w-[12rem] h-[3.25rem] bg-red-500 py-[11px] px-[17px] rounded-[10px]'>
    <Link to='#' className='text-slate-50 text-[0.7rem] font-semibold font-serif'>
      BARBELLS AND PLATES
    </Link>
  </div>
</div>

<div className='flex items-center justify-center mx-auto'>
  <div className='box-grid w-[12rem] h-[3.25rem] bg-red-500 py-[11px] px-[17px] rounded-[10px]'>
    <Link to='#' className='text-slate-50 text-[0.7rem] font-semibold font-serif'>
     CROSSFIT EQUIPMENTS
    </Link>
  </div>
</div>

<div className='flex items-center justify-center mx-auto'>
  <div className='box-grid w-[12rem] h-[3.25rem] bg-red-500 py-[11px] px-[17px] rounded-[10px]'>
    <Link to='#' className='text-slate-50 text-[0.7rem] font-semibold font-serif'>
     HOME & GYM
    </Link>
  </div>
</div>
<div className='flex items-center justify-center mx-auto'>
  <div className='box-grid w-[12rem] h-[3.25rem] bg-red-500 py-[11px] px-[17px] rounded-[10px]'>
    <Link to='#' className='text-slate-50 text-[0.7rem] font-semibold font-serif'>
      CARDIO MACHINES
    </Link>
  </div>
 
</div>
 <br/>
<div className='flex items-center justify-center mx-auto'>
  <div className='box-grid w-[12rem] h-[3.25rem] bg-red-500 py-[11px] px-[17px] rounded-[10px]'>
    <Link to='#' className='text-slate-50 text-[0.7rem] font-semibold font-serif'>
      CARDIO MACHINES
    </Link>
  </div>
</div>
</div>
<br/>
<div className='flex flex-row items-center justify-center space-x-[8rem]'>
  <div className='box-grid w-[12rem] h-[3.25rem] bg-red-500 py-[11px] px-[17px] rounded-[10px]'>
    <Link to='#' className='text-slate-50 text-[0.7rem] font-semibold font-serif'>
      CARDIO MACHINES
    </Link>
  </div>
  
  <div className='box-grid w-[12rem] h-[3.25rem] bg-red-500 py-[11px] px-[17px] rounded-[10px]'>
    <Link to='#' className='text-slate-50 text-[0.7rem] font-semibold font-serif'>
      CARDIO MACHINES
    </Link>
  </div>
  <div className='box-grid w-[12rem] h-[3.25rem] bg-red-500 py-[11px] px-[17px] rounded-[10px]'>
    <Link to='#' className='text-slate-50 text-[0.7rem] font-semibold font-serif'>
      CARDIO MACHINES
    </Link>
  </div>
  <div className='box-grid w-[12rem] h-[3.25rem] bg-red-500 py-[11px] px-[17px] rounded-[10px]'>
    <Link to='#' className='text-slate-50 text-[0.7rem] font-semibold font-serif'>
      CARDIO MACHINES
    </Link>
  </div>
</div>
</div>
  )
}

export default Category