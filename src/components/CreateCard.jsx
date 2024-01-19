import React from 'react'

function CreateCard({ createVisibility, setCreateVisibility }) {
    return (
        <div className={`${createVisibility ? 'fixed inset-0' : 'hidden'} flex justify-center items-center w-screen z-10 bg-opacity-50 bg-black`}>            
            <div className='flex flex-col justify-center sm:justify-around px-5 sm:px-20 py-10 items-center w-screen sm:w-[700px] h-screen sm:max-h-[420px] sm:rounded-[13px] bg-white relative'>   
                <button onClick={() => setCreateVisibility(false)} class="w-5 h-5 bg-red-600 rounded-full absolute top-[10px] right-[10px]"></button>
                <h3 className='text-2xl font-bold'>CREATE CARD</h3>
                <div className='flex text-center mt-5 sm:text-left flex-col w-full'>
                    <label className='text-xl text-zinc-400' htmlFor="">Title</label>
                    <input className='py-3 px-2 mt-2 border rounded-[6px]' type="text" name="" id="" />
                    <label className='text-xl mt-2 text-zinc-400' htmlFor="">Description</label>
                    <input className='py-3 px-2 mt-2 border rounded-[6px]' type="text" name="" id="" />
                </div>
                <div className='flex justify-center sm:justify-end sm:items-center w-full mt-5'>
                <button onClick={() => setCreateVisibility(false)} className='px-5 py-3 border rounded-[15px]  mx-2 bg-white hover:bg-[#DFDFDF]'>Close</button>
                    <button className='px-5 py-3 border rounded-[15px] mx-5 bg-amber-400 hover:bg-amber-500'>Create</button>
                </div>
            </div>
        </div>
    )
}

export default CreateCard