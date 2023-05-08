import React from 'react';

export default function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#051c3e] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p> Currently working on a diverse portfolio of projects, which includes simple apps like the Calculator and a fully responsive e-commerce website.
                            Proficient in both front-end and back-end programming using a multitude of technologies including React.js with hooks and state management, Tailwind.css for styling, Express.js, and PostgreSQL. 
                            Experience in Git repositories, freelancing, peer programming, and writing quality code. 
                            Additionally, I am proficient in HTML and CSS, and comfortable with advanced JavaScript concepts such as DOM manipulation, as well as advanced programming concepts like data structures and algorithms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}