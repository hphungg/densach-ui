'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    icon?: string;
}

const navItems: NavItem[] = [
    {
        label: "Danh mục",
        link: "/",
        children: [
            {
                label: "Lớp 10",
                link: "/",
                icon: "/number-10.svg"
            },
            {
                label: "Lớp 11",
                link: "/",
                icon: "/number-11.svg"
            },
            {
                label: "Lớp 12",
                link: "/",
                icon: "/number-12.svg"
            },
        ]
    },
    {
        label: "Lớp học",
        link: "/"
    }
]

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 100) {
                setColor('#ffffff');
                setTextColor('#639CF3');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    const [animationParent] = useAutoAnimate();
    const [isSideMenuOpen, setSideMenue] = useState(false);
    function openSideMenu() {
        setSideMenue(true);
    }
    function closeSideMenu() {
        setSideMenue(false);
    }

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-2 text-white font-patrick' style={{ color: `${textColor}` }} >
                <div className='hidden sm:flex transition-all items-center font-bold text-2xl' ref={animationParent}>
                    {
                        navItems.map((d, i) => (
                            <Link key={i} href={d.link ?? "/"} className='mx-[10px] relative group px-2 py-3 transition-all' >
                                <div className="flex cursor-pointer items-center gap-2 group-hover:text-[#639CF3] ">
                                    <span>{d.label}</span>
                                    {d.children && (
                                        <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                                    )}
                                </div>

                                {d.children && (
                                    <div className="absolute top-[70px] hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex ">
                                        {d.children.map((ch, i) => (
                                            <Link
                                                key={i}
                                                href={ch.link ?? "#"}
                                                className="text-[#639CF3] flex cursor-pointer items-center py-1 pl-1 pr-5 hover:text-[#639CF3]"
                                            >
                                                {/* image */}
                                                {ch.icon && (
                                                    <Image src={ch.icon} alt="item-icon" width={30} height={30} />
                                                )}
                                                {/* item */}
                                                <span className="whitespace-nowrap pl-3 justify-center">
                                                    {ch.label}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </Link>
                        ))
                    }
                </div>

                <Link href='/'>
                    <Image src='/logo.webp' alt='' width={100} height={100} />
                </Link>

                <Link href='/'>
                    <button type="button" className="hidden sm:flex px-4 py-2 tracking-wide text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-lg text-center ml-[140px]">Đăng nhập</button>
                </Link>


                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    }
                >
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Trang chủ</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Danh mục</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Môn học</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Đăng nhập</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;