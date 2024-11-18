import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React from 'react'

const UserDrowdown = () => {
    return (
        <div className='relative flex w-[200px] justify-between items-center rounded px-2 py-1 hover:bg-slate-100'>
            <div className='flex gap-2'>
                <div className='rounded-full bg-slate-600  flex justify-center items-center w-[35px] h-[35px]'>
                    <h1 className='text-white font-semibold text-center text-base ml-[2px]'>JD</h1>
                </div>
                <div>
                    <h1>John Doe</h1>
                    <h2 className='text-xs'>Manager</h2>
                </div>
            </div>
            <div>
                <ChevronDownIcon width={20} height={20} className='text-[20px]' />
            </div>
            <div className='absolute bg-white shadow-md w-[200px] h-[200px] top-full mt-6 rounded right-2'>

            </div>
        </div>
    )
}

export default UserDrowdown