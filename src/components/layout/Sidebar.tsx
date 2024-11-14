'use client'
import Link from "next/link";

const menus = [
    {
        id: 1,
        label: 'Dashboard',
        url: '/dashboard'
    },
    {
        id: 2,
        label: 'Tenants',
        url: '/dashboard/tenants'
    },
    {
        id: 3,
        label: 'Rooms',
        url: '/dashboard/rooms'
    },
    {
        id: 4,
        label: 'Bookings',
        url: '/dashboard/bookings'
    },
    {
        id: 5,
        label: 'Payments',
        url: '/dashboard/payments'
    },
    {
        id: 6,
        label: 'Maintenance Requests',
        url: '/dashboard/maintenance_request'
    },
    {
        id: 7,
        label: 'Reports',
        url: '/dashboard/reports'
    },
    // {
    //     id:1,
    //     label: 'Settings',
    //     url:'/dashboard/settings'
    // },
    // {
    //     id:1,
    //     label: 'Notifications',
    //     url:'/dashboard/notifications'
    // },
]

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white h-full p-4">
            <div>
                <h2 className="text-lg font-bold mb-4">Navigation</h2>
            </div>
            <nav>
                <ul>
                    {menus.map((item, idx: number) => (
                        <li className="mb-2" key={idx}>
                            <Link href={item.url} className="hover:bg-gray-700 p-2 block rounded">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}