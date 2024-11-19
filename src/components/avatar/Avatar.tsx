import React from 'react';

type AvatarProps = {
    name: string;
    size?: number; // Size of the avatar (optional, default to 40px)
    backgroundColor?: string; // Background color (optional, default to blue)
};

const Avatar: React.FC<AvatarProps> = ({ name, size = 40, backgroundColor = 'bg-blue-500' }) => {
    // Function to extract initials
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase();
    };

    const initials = getInitials(name);

    return (
        <div
            className={`flex items-center justify-center text-white font-bold rounded-full ${backgroundColor}`}
            style={{
                width: size,
                height: size,
                fontSize: size / 2.5, // Font size adjusts relative to the avatar size
            }}
        >
            {initials}
        </div>
    );
};

export default Avatar;
