'use client'
import '../../globals.css'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import star from '../../../../public/star.png'
import pic1 from '../../../../public/star.png' // Replace with actual image paths
import pic2 from '../../../../public/star.png' // Replace with actual image paths
import pic3 from '../../../../public/star.png' // Replace with actual image paths
import pic4 from '../../../../public/star.png' // Replace with actual image paths

const HomeText = () => {
    return (
        <div className="max-w-5xl mx-auto rounded-lg bg-transparent text-white font-roboto text-center mb-20 pb-5 sm:text-4xl text-3xl font-medium title-font py-5 text-white">
            <div style={{ marginTop: '10%' }}>
                Welcome to the <span style={{ fontWeight: 'bolder' }}></span> Astronomy Club's Flagship Fest <br /><span style={{ fontWeight: 'bolder' }}>"Yuri's Night"</span>
            </div>
        </div>
    );
};

const YuriNight = () => {
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

            <div style={{ height: 50 }}></div>
            <div
                style={{
                    backgroundImage: `url('../../../static/bcg.gif')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '88vh',
                    cursor: 'none' // Hide default cursor
                }}
            >
                <HomeText />
                {/* Container for images and texts */}
                <div className="flex flex-wrap justify-center gap-10 p-10">
                    {/* Image and Text Block 1 */}
                    <div className="flex items-center p-3 border border-white rounded-lg bg-opacity-30 bg-white">
                        <Image src={pic1} alt="Picture 6" width={150} height={150} className="rounded-lg transition-transform transform hover:scale-105" />
                        <div className="ml-5 text-white">
                            <h2 className="text-xl font-bold">Astro Talk</h2>
                            <p>A celestial clash of intellects where <br />contestants debate in the given topics</p>
                        </div>
                    </div>

                    {/* Image and Text Block 2 */}
                    <div className="flex items-center p-3 border border-white rounded-lg bg-opacity-30 bg-white">
                        <div className="mr-5 text-white">
                            <h2 className="text-xl font-bold">Cosmic Script</h2>
                            <p>An article writing competition<br />to explore the wonders of the cosmos</p>
                        </div>
                        <Image src={pic2} alt="Picture 6" width={150} height={150} className="rounded-lg transition-transform transform hover:scale-105" />
                    </div>

                    {/* Image and Text Block 3 */}
                    <div className="flex items-center p-3 border border-white rounded-lg bg-opacity-30 bg-white">
                        <Image src={pic3} alt="Picture 6" width={150} height={150} className="rounded-lg transition-transform transform hover:scale-105" />
                        <div className="ml-5 text-white">
                            <h2 className="text-xl font-bold">Cosmic Canvas</h2>
                            <p>An art competition where one captures<br /> the beauty of cosmos on canvas.</p>
                        </div>
                    </div>

                    {/* Image and Text Block 4 */}
                    <div className="flex items-center p-3 border border-white rounded-lg bg-opacity-30 bg-white">
                        <div className="mr-5 text-white">
                            <h2 className="text-xl font-bold">Astro Quiz</h2>
                            <p>A quiz competition challenging <br />participants knowledge on Astronomy</p>
                        </div>
                        <Image src={pic4} alt="Picture 6" width={150} height={150} className="rounded-lg transition-transform transform hover:scale-105" />
                    </div>

                    {/* Image and Text Block 5 */}
                    <div className="flex items-center p-3 border border-white rounded-lg bg-opacity-30 bg-white">
                        <Image src={pic4} alt="Picture 6" width={150} height={150} className="rounded-lg transition-transform transform hover:scale-105" />
                        <div className="ml-5 text-white">
                            <h2 className="text-xl font-bold">Planet Hunt</h2>
                            <p>A celestial Challenge utilising Machine <br />Learning cut-edge algorithms </p>
                        </div>
                    </div>

                    {/* Image and Text Block 6 */}
                    <div className="flex items-center p-3 border border-white rounded-lg bg-opacity-30 bg-white">
                        <div className="mr-5 text-white">
                            <h2 className="text-xl font-bold">Astro Pixels</h2>
                            <p>Competition to explore cosmos using<br /> Deep Learning and Computer Vision</p>
                        </div>
                        <Image src={pic4} alt="Picture 6" width={150} height={150} className="rounded-lg transition-transform transform hover:scale-105" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default YuriNight;
