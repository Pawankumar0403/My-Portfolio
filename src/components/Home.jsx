import React, { useState, useEffect } from 'react';
import { ReactTyped as Typed } from 'react-typed';
import dp from "../assets/images/WhatsApp Image 2024-05-07 at 8.35.06 PM.jpeg";

function Home() {
    const [transform, setTransform] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY, currentTarget } = e;
            const rect = currentTarget.getBoundingClientRect();
            const x = ((clientX - rect.left) / rect.width - 0.5) * 30;
            const y = ((clientY - rect.top) / rect.height - 0.5) * 30;
            setTransform({ x, y });
        };

        const handleMouseLeave = () => {
            setTransform({ x: 0, y: 0 });
        };

        const imgElement = document.querySelector('.fluid-image');
        imgElement.addEventListener('mousemove', handleMouseMove);
        imgElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            imgElement.removeEventListener('mousemove', handleMouseMove);
            imgElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="flex flex-wrap justify-center items-center mx-[1px] md:gap-20 h-[90vh] md:h-[100vh] mt-2 md:mt-0">
            <img
                src={dp}
                alt="Profile"
                className="fluid-image w-[230px] h-[230px] md:w-[400px] md:h-[400px] rounded-[50%] z-10"
                style={{
                    transform: `rotateX(${transform.y}deg) rotateY(${transform.x}deg)`,
                }}
            />
            <div className="text-center mx-[5px]">
                <p className="text-base text-[#626362] font-semibold md:my-3">Hello, I'm</p>
                <h1 className="text-3xl md:text-5xl font-semibold md:my-3">Pawan Kumar R </h1>
                <Typed
                    className="text-xl md:text-[28px] text-[#626362] font-semibold my-3"
                    strings={['Frontend Developer', 'Backend Developer', 'MERN Stack Developer', 'Full Stack Web Developer']}
                    typeSpeed={100}
                    backSpeed={80}
                    loop
                />
                <div className="flex gap-5 my-4 justify-center">
                    <a
                        href="/Pawan Kumar Resume.pdf"
                        target="_blank"
                        className="border-[2px] border-[#3b3a3a] p-3 rounded-3xl font-medium text-[13px] hover:bg-[#3b3a3a] hover:text-white ease-in-out transition-all"
                    >
                        Download CV
                    </a>
                    <a
                        href="#contact"
                        className="text-[13px] border-[2px] border-[#3b3a3a] p-3 rounded-3xl font-medium bg-[#3b3a3a] text-white"
                    >
                        Contact Info
                    </a>
                </div>

                <div className="flex gap-7 justify-center">
                    <a href="https://www.linkedin.com/in/pawankumar0403/">
                        <i className="fa-brands fa-linkedin fa-2xl my-4"></i>
                    </a>
                    <a href="https://github.com/Pawankumar0403">
                        <i className="fa-brands fa-github fa-2xl my-4"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
