"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HornAntennaImage from '../../../../public/star.png'; // Replace with actual path
import PlanetariumImage from '../../../../public/star.png'; // Replace with actual path
import ObservatoryImage from '../../../../public/star.png'; // Replace with actual path
import SatelliteTrackerImage from '../../../../public/star.png'; // Replace with actual path
import CubeSatImage from '../../../../public/star.png'; // Replace with actual path
import star from '../../../../public/star.png'; // Update path to your custom cursor image

const projects = [
    {
        title: "CubeSat",
        image: CubeSatImage,
        description: "We have developed a rudimentary CanSat with a video camera to demonstrate the working of electronic sensing components and basic heating system at upper atmosphere conditions. It can carry out gas sensing , temperature and pressure measurements.",
        imageFirst: true
    },
    {
        title: "Planetarium",
        image: PlanetariumImage,
        description: "A visionary project that aims to immerse individuals in the enchanting darkness of the night sky, fostering a deep appreciation for space exploration among enthusiasts.he planetarium helps in attracting people towards amateur astronomy. The planetarium serves the purpose of observing the night sky of Varanasi as well as other regions of the world regardless of weather conditions and time of the day. The planetarium will have an occupancy of 15-20 people. Its major application will be to conduct observational sessions.",
        imageFirst: false
    },
    {
        title: "Horn Antenna",
        image: HornAntennaImage,
        description: "Radio astronomy is a major field in observational and computational astronomy. There are many types of antennae to observe radio waves, the most basic of which is Horn Antenna. To encourage advanced astronomy in the institute, the Astronomy Club is building its own Pyramidal Horn Antenna. Upon its completion, the club will be able to conduct its own radio observations and analyze and study the data obtained.",
        imageFirst: true
    },
    {
        title: "Solid Fuel Rocket",
        image: PlanetariumImage,
        description: "Each component, from the sturdy body to the nozzle was made with care. As it soared into the sky, propelled by the power of science and ingenuity, we witnessed the culmination of our efforts.",
        imageFirst: false
    },
    {
        title: "Maan Singh Observatory, Varanasi",
        image: ObservatoryImage,
        description: "Ancient observatories are an important tool to understand the foundations of Astronomy, about how ancient cultures found a connection between astronomy and nature. In an endeavor to explore the significance of these structures and how they impacted astronomy as we know it, the students of the Astronomy Club of IIT BHU undertook an activity at the Man Singh Observatory in Varanasi, India. Various solar parameters including the local solar time, azimuth, declination, and hour angles were calculated using measurements taken from instruments at the observatory.",
        imageFirst: true
    },
    {
        title: "Satellite Tracker",
        image: SatelliteTrackerImage,
        description: "Our team has successfully created a sophisticated tool that aligns with our overarching goals. With its capabilities, we are empowered to delve deeper into our pursuits and explore the cosmos with greater precision and efficiency.",
        imageFirst: false
    },

];

const Projects = () => {
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
        <div className="projects-container px-5 py-4 relative">
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

            <h1 className="text-4xl font-bold mb-6 mt-20 text-center text-white">Club Projects</h1>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`project-item flex ${project.imageFirst ? 'flex-row' : 'flex-row-reverse'} mb-8`}
                >
                    <div className="flex-1 flex items-center justify-center">
                        <Image src={project.image} alt={project.title} className="w-full h-auto max-w-md" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center px-4 text-white">
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="text-lg">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
