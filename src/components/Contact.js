import React from 'react';

export default function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-[#051c3e] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/18eb5231-61c8-42e9-90d1-6a5a87f35487" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-6'>Submit the form below or send me an email - MalvoWC@gmail.com</p>
                </div>
                <input className='p-2' type='text' placeholder='Name' name='name'/>
                <input className='my-4 p-2' type='email' placeholder='Email' name='email'/>
                <textarea className='p-2' name='message' rows='10' placeholder='Message'/>
                <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Work</button>
            </form>
        </div>
    );
}
