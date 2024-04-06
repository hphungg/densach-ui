"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://photo.znews.vn/w660/Uploaded/wyhktpu/2018_12_27/image001_6.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1471107191679-f26174d2d41e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1468273519810-d3fe4c125cdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1518463892881-d587bf2c296a?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((nextIndex) => (nextIndex === slides.length - 1 ? 0 : nextIndex + 1))
  }

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(autoPlay)
  }, [currentIndex]);

  return (
    <div className='flex items-center justify-center h-screen bg-center bg-cover custom-img duration-500' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] text-center'>
        <h2 className='text-8xl font-bold font-lobster mb-5 mt-10'>Thư viện thông tin</h2>
        <p className='py-5 text-2xl mb-10 font-medium font-patrick'>Cung cấp thông tin, trang bị định hướng, làm chủ con đường, vững bước tương lai.</p>
        <Link href="/">
          <button type="button" className="px-8 py-2 text-white tracking-wide font-patrick bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl text-center me-2 mb-2">Khám phá ngay</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero;