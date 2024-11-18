'use client'
import { useState } from 'react';

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside
            className={`bg-gray-800 text-white h-full p-4 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'
                }`}
        >
            <div className='flex items-center mb-4 gap-2'>
                <button
                    onClick={toggleSidebar}
                    className="bg-gray-600 text-white p-2 rounded"
                >
                    {isCollapsed ? '▶' : '◀'}
                </button>
                <h1 className={`${isCollapsed ? 'hidden' : ''}`}>
                    Dashboard
                </h1>

            </div>

            <nav className={`${isCollapsed ? 'hidden' : ''}`}>
                <ul>
                    <li className="mb-2">
                        <a href="/dashboard" className="hover:bg-gray-700 p-2 block rounded">
                            Dashboard
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/dashboard/tenants" className="hover:bg-gray-700 p-2 block rounded">
                            Tenants
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/rooms" className="hover:bg-gray-700 p-2 block rounded">
                            Rooms
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/dashboard/users" className="hover:bg-gray-700 p-2 block rounded">
                            Users
                        </a>
                    </li>
                    {/* Add more links */}
                </ul>
            </nav>
        </aside>
    );
}
