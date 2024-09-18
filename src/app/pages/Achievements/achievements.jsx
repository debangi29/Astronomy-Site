"use client"
import '../../globals.css'
import { Roboto } from 'next/font/google'
import Image from 'next/image';
import AchievementIcon from '../../../../public/hero.png' // Use an appropriate icon image
import star from '../../../../public/star.png' // Add the path to your star image
import { useState, useEffect } from 'react'; // Import useState and useEffect
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

const nssc2023 = [
    {
        title: 'First Place in Cosmomath',
        description: 'Team Ace : Hardik Sharma, Aarav Mehta',
        date: 'October 2023',
    },
    {
        title: 'Second Place in Asteroid Venture',
        description: 'Team Intesteller Sharks : Shashank Shekhar Singh, Debangi Ghosh',
        date: 'October 2023',
    },
    {
        title: 'Third Place in Case Study',
        description: 'Team Jack_The_Kat : Yasvardhan, Sanyam Jain',
        date: 'October 2023',
    }
]
const nssc2022 = [
    {
        title: 'First Place in Case Study',
        description: 'Team aa : a, b, c',
        date: 'October 2022',
    },
    {
        title: 'Second Place in Cosmomath',
        description: 'Team ab : a, b',
        date: 'October 2022',
    }
]
const nssc2021 = [
    {
        title: 'First Place in National Space Quiz',
        description: 'Secured the top position in the national level quiz competition on space sciences.',
        date: 'July 2023',
    }
]
const Anvesha = [
    {
        title: 'First Place in National Space Quiz',
        description: 'Secured the top position in the national level quiz competition on space sciences.',
        date: 'July 2023',
    }
]
const astrochamp = [
    {
        title: 'Outstanding Contribution to Space Research',
        description: 'Recognized for exceptional contributions to space research and exploration.',
        date: 'June 2024',
    },
    {
        title: 'Innovative Solution for Astronomical Data Analysis',
        description: 'Developed an innovative solution for analyzing large-scale astronomical data.',
        date: 'September 2024',
    }
]
const iaac = [
    {
        title: 'Outstanding Contribution to Space Research',
        description: 'Recognized for exceptional contributions to space research and exploration.',
        date: 'June 2024',
    }
]
const astrax = [
    {
        title: 'Outstanding Contribution to Space Research',
        description: 'Recognized for exceptional contributions to space research and exploration.',
        date: 'June 2024',
    }
]
const nssc2019 = [
    {
        title: 'Award for Excellence in Research',
        description: 'Received recognition for outstanding research contributions in astrophysics.',
        date: 'August 2024',
    },
    {
        title: 'Top Innovator in Space Technology',
        description: 'Honored for pioneering innovations in space technology.',
        date: 'December 2024',
    }
]
const nssc2018 = [
    {
        title: 'Award for Excellence in Research',
        description: 'Received recognition for outstanding research contributions in astrophysics.',
        date: 'August 2024',
    },
    {
        title: 'Top Innovator in Space Technology',
        description: 'Honored for pioneering innovations in space technology.',
        date: 'December 2024',
    }
]


const Achievements = () => {
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

        <div className='min-h-screen bg-gray-900 p-[50px] pb-[100px]'
            style={{
                backgroundImage: "url('../../../static/bcg.gif')",
                backgroundSize: 'cover', // Adjust how the image fills the container
                backgroundPosition: 'center', // Adjust the positioning of the image
                backgroundRepeat: 'no-repeat' // Avoid the image repeating
            }}
        >

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
            {/* Heading */}
            <h1 className='text-white text-[50px] mb-[30px] text-center'>
                <span className={roboto.className}>Our Winners</span>
            </h1>
            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'23</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2023.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'22</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2022.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'21</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2021.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Anvesha Section */}
            <div>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>Anvesha</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {Anvesha.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Astrochamp Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>Astrochamp</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {astrochamp.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* IAAC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>IAAC'21</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {iaac.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Astrax Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>Astrax'20</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {astrax.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'19</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2019.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'18</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2018.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Achievements