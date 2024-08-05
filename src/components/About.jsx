import abt from "../assets/images/about.png"

function About() {
    return (
        <div className="flex flex-col justify-center text-center items-center h-[100vh] my-10 md:my-0" id="about">
            <p className="text-base text-[#555555] text-center my-2">Get To Know More</p>
            <h1 className="text-3xl md:text-5xl text-center font-medium my-2">About Me</h1>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 my-10 md:w-[80%] mx-auto" >
                <img src={abt} alt="" className="w-[70%] md:w-[40%]" />
                <div className="p-10">
                    <p className="text-[#555555] text-sm text-justify md:text-lg text-wrap">
                        I am a passionate Fresher Full Stack Web Developer with a keen interest in building innovative web applications.
                        My journey in web development has equipped me with a solid understanding of both front-end and back-end technologies,
                        enabling me to develop comprehensive and efficient solutions. I have honed my skills in HTML, CSS, Tailwind CSS, JavaScript, and ReactJS for front-end development, and in NodeJS, ExpressJS, and MongoDB for back-end development.
                        Additionally, I am proficient in responsive design, creating RESTful APIs, and using Git/GitHub for version control.
                        I thrive in collaborative environments, continuously learning and adapting to new technologies to stay at the forefront of the industry.
                        With a proactive approach to problem-solving and a commitment to delivering high-quality work,
                        I aim to contribute effectively to any development team and project.</p>
                </div>
            </div>
        </div>

    )
}

export default About