"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import photos from '../../../../public/star.png'; // Replace with actual path
import star from '../../../../public/star.png'; // Update path to your custom cursor image

// Sample data for team members
const teamMembers = {
    2024: [
        { name: "John Doe", designation: "Team Leader", photo: photos },
        { name: "Jane Smith", designation: "Developer", photo: photos }
    ],
    2023: [
        { name: "Alice Johnson", designation: "Designer", photo: photos },
        { name: "Bob Brown", designation: "Engineer", photo: photos }
    ]
    // Add more years and team members as needed
};

const Team = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Update cursor position on mouse movement
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="team-container p-6 relative">
            {/* Custom Star Cursor */}
            <div
                className="fixed top-0 left-0 pointer-events-none"
                style={{
                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                    zIndex: 1000,
                }}
            >
                <Image src={star} alt="Star Cursor" width={30} height={30} />
            </div>

            {Object.keys(teamMembers).map((year) => (
                <div key={year} className="year-section mb-12">
                    <h1 className="text-4xl font-bold text-center mb-6 mt-20 text-white">Team {year}</h1>
                    <div className="flex flex-wrap justify-center gap-6">
                        {teamMembers[year].map((member, index) => (
                            <div
                                key={index}
                                className="team-member flex flex-col items-center text-center border rounded-lg p-4 bg-white shadow-md"
                            >
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover mb-4"
                                    width={128}
                                    height={128}
                                />
                                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                                <p className="text-md text-gray-600">{member.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
