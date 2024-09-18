'use client' // Add this at the top to ensure the file is treated as a Client Component

import React, { useEffect, useState } from 'react';
import events_data from './data';
import EventCard from '@/app/Components/EventCard';
import Image from 'next/image';
import star from '../../../../public/star.png'; // Update the path to your star image

const containerStyle = {
  margin: '60px 150px', // Set margin-top to the height of your navbar
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'none' // Hide default cursor
};

const headingStyle = {
  fontSize: '24px' // Set the desired font size
};

const Activities = () => {
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
    <>
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

      <div style={containerStyle}>
        <h1 style={headingStyle}>Events and Activities</h1>
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-10'>
          {events_data.map((event) => (
            <EventCard key={event.title} title={event.title} image={event.img} disc={event.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Activities;
