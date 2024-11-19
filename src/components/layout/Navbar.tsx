import UserDrowdown from "./UserDrowdown";


export default function Navbar() {
    return (
        <header className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Dashboard</h1>

            <div className="flex items-center gap-2">
                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900">
                        Notifications
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                        Profile
                    </button>
                </div>
                <div className="w-[1px] h-[20px] bg-slate-600"></div>
                <UserDrowdown />

            </div>
        </header>
    );
}
