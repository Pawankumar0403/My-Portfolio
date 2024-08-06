function Contact() {

    return (
        <div className="flex flex-col text-center justify-around items-center md:h-[80vh] mt-[530px] md:mt-24" id="contact">
            <div>
                <p className="text-base text-[#555555] text-center my-2">Get in Touch</p>
                <h1 className="text-3xl md:text-5xl text-center font-medium my-2">Contact Me</h1>
                <div className="flex flex-wrap mx-auto gap-3 md:gap-10 mt-10 border-[2px] border-[#a3a3a3] p-5 md:p-8 rounded-[30px] w-[90%] items-center justify-center md:w-auto mb-28">
                    <div className="flex items-center gap-4 ">
                        <i className="fa-solid fa-envelope fa-xl"></i>
                        <p><a href="mailto:pawankumarr0403@gmail.com" className="hover:border-b-[3px] hover:text-gray-400 ease-in-out text-base md:text-xl">pawankumarr0403@gmail.com</a></p>
                    </div>
                    <div className="flex items-center gap-4">
                        <i className="fa-brands fa-linkedin fa-xl"></i>
                        <p><a href="https://www.linkedin.com/in/pawankumar0403/" className="hover:border-b-[3px] hover:text-gray-400 ease-in-out text-base md:text-xl">LinkedIn</a></p>
                    </div>
                </div>

            </div>

            <div className="text-center items-center mx-auto flex flex-col">
                <ul className="flex flex-col md:flex-row gap-5 md:gap-10 text-base md:text-[24px] text-center ">
                    <li><a href="#about" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">About</a></li>
                    <li><a href="#skill" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">Skills</a></li>
                    <li><a href="#work" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">Work</a></li>
                    <li><a href="#contact" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">Contact</a></li>
                </ul>

                <p className="text-base text-[#555555] px-8 py-10">Copyright © 2024 Pawan Kumar R. All Rights Reserved.</p>
            </div>


        </div>
    )
}

export default Contact