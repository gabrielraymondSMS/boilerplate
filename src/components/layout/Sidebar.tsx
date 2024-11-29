'use client';
import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import useAppStore from '@/store/store';
import Link from 'next/link';
import { ChevronRightIcon, ChevronDownIcon, HomeIcon, UsersIcon, UserGroupIcon, WrenchIcon } from '@heroicons/react/24/solid';

export default function Sidebar() {
    const { sidebarOpen, toggleSidebar } = useAppStore();
    const pathname = usePathname(); // usePathname relies on the client-side API

    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

    const toggleSubmenu = (name: string) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };



    const menuItems = useMemo(() => [
        { name: 'Dashboard', href: '/dashboard', icon: <HomeIcon className="w-5 h-5" /> },
        {
            name: 'Tenants',
            icon: <UsersIcon className="w-5 h-5" />,
            children: [
                { name: 'Active Tenants', href: '/dashboard/tenants/active' },
                { name: 'Inactive Tenants', href: '/dashboard/tenants/inactive' },
            ],
        },
        {
            name: 'Rooms',
            icon: <WrenchIcon className="w-5 h-5" />,
            href: '/dashboard/rooms',
        },
        {
            name: 'Users',
            icon: <UserGroupIcon className="w-5 h-5" />,
            href: '/dashboard/users',
        },
        {
            name: 'Maintenance',
            icon: <WrenchIcon className="w-5 h-5" />,
            children: [
                { name: 'House', href: '/dashboard/maintenance/house' },
                { name: 'Room', href: '/dashboard/maintenance/rooms' },
            ],
        },
    ], []);

    return (
        <aside className={`bg-gray-800 text-white h-full p-4 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
            <div className="flex items-center mb-4 gap-2">
                <button onClick={() => toggleSidebar()} className="bg-gray-600 text-white p-2 rounded">
                    {sidebarOpen ? '▶' : '◀'}
                </button>
                <h1 className={`${sidebarOpen ? '' : 'hidden'}`}>Dashboard</h1>
            </div>

            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.name} className="mb-2 relative group">
                            {item.children ? (
                                <div
                                    className={`flex justify-between items-center cursor-pointer p-2 rounded transition-all ${pathname.startsWith(item.href || '') ? ' text-white' : 'hover:bg-gray-700'}`}
                                    onClick={() => toggleSubmenu(item.name)}
                                >
                                    <span className="flex items-center gap-2">
                                        {item.icon}
                                        {sidebarOpen && item.name}

                                    </span>
                                    {sidebarOpen && <span className="ml-2 text-gray-400 hover:text-white">
                                        {openSubmenus[item.name] ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />}
                                    </span>}

                                </div>
                            ) : (
                                <Link href={item.href} className={`block p-2 rounded transition-all ${pathname === item.href ? ' text-white' : 'hover:bg-gray-700'}`}>
                                    <span className="flex items-center gap-2">
                                        {item.icon}
                                        {sidebarOpen && item.name}
                                    </span>
                                    {pathname === item.href && <span className="absolute left-0 top-0 h-full w-1 bg-blue-400"></span>}
                                </Link>
                            )}



                            {item.children && openSubmenus[item.name] && (

                                sidebarOpen ?
                                    <ul className="ml-4 mt-2">
                                        {item.children.map((child) => (
                                            <li key={child.name} className="mb-2">
                                                <div className="relative">
                                                    <Link href={child.href} className={`block p-2 rounded transition-all ${pathname === child.href ? ' text-white pl-6' : 'hover:bg-gray-700'}`}>
                                                        {pathname === child.href && <span className="absolute left-0 top-0 h-full w-1 bg-blue-400"></span>}
                                                        {sidebarOpen && child.name}

                                                    </Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    :
                                    <div className='absolute left-full top-0 bg-gray-800 w-64  px-2 py-1 hidden group-hover:block transition-all hover:duration-300 '>
                                        <ul className=" mt-2">
                                            {item.children.map((child) => (
                                                <li key={child.name} className="mb-2">
                                                    <div className="relative">
                                                        <Link href={child.href} className={`block p-2 rounded transition-all ${pathname === child.href ? ' text-white pl-6' : 'hover:bg-gray-700'}`}>
                                                            {pathname === child.href && <span className="absolute left-0 top-0 h-full w-1 bg-blue-400"></span>}
                                                            {child.name}

                                                        </Link>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
