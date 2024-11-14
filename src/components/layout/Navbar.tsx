

export default function Navbar() {
    return (
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900">
                    Notifications
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                    Profile
                </button>
            </div>
        </header>
    );
}