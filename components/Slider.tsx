"use client"

import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Image from 'next/image';

const Slider = () => {
    const [current, setCurrent] = useState(0);

    const slides = [
        {
            url: "/gallery-2.jpg",
        },
        {
            url: "/gallery-3.webp",
        },
        {
            url: "/gallery-4.webp",
        },
    ];

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    return (
        <div className='max-w-[1240px] mx-auto'>
            <h1 className='text-6xl font-bold text-center p-[50px] font-lobster'>Phần bài viết nha</h1>
            <p className='text-xl font-medium text-center pb-[50px]'>Cái này để tạm thời vậy thui chứ thực ra là thay bằng phần bài viết bên kia.</p>
            <div className='relative flex justify-center p-4'>
                {
                    slides.map((slide, index) => {
                        return (
                            <div key={index}
                                className={index === current ? 'opacity-[1] ease-in duration-100' : 'opacity-0'}>

                                <FaArrowCircleLeft
                                    onClick={prevSlide}
                                    className='absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]'
                                    size={50}
                                />

                                {index === current && (
                                    <Image
                                        src={slide.url}
                                        alt='/'
                                        width='900'
                                        height='500'
                                        objectFit='cover'
                                    />
                                )}

                                <FaArrowCircleRight
                                    onClick={nextSlide}
                                    className='absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]'
                                    size={50}
                                />

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider