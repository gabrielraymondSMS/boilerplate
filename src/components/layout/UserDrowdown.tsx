'use client'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useRef, useState } from 'react'
import Avatar from '../avatar/Avatar';

const UserDrowdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);


    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    return (
        <div className='relative flex w-[200px] justify-between items-center rounded px-2 py-1 ' ref={dropdownRef} onClick={toggleDropdown}>
            <div className='flex items-center justify-between cursor-pointer w-full hover:bg-slate-100'>
                <div className='flex gap-2' >
                    <Avatar name="Jane Doe" size={40} backgroundColor="bg-green-500" />
                    <div>
                        <h1>John Doe</h1>
                        <h2 className='text-xs'>Manager</h2>
                    </div>
                </div>
                <div>
                    <ChevronDownIcon width={20} height={20} className={`text-[20px] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </div>
            {/* {isOpen && ( */}
            <div className={`absolute bg-white shadow-md w-[250px] h-[200px] top-full mt-6 rounded p-4 right-2 transition-all duration-300 ease-in-out transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div className='flex gap-2 items-center'>
                    <Avatar name='John Doe' size={60} backgroundColor='bg-green-500' />
                    <div>
                        <h1>John Doe</h1>
                        <h2 className='text-xs'>Manager</h2>
                    </div>
                </div>

            </div>
            {/* )} */}

        </div>
    )
}

export default UserDrowdown