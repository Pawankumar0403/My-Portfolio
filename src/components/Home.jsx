import dp from "../assets/images/WhatsApp Image 2024-05-07 at 8.35.06 PM.jpeg";

function Home() {
    return (
        <div className="flex flex-wrap justify-center items-center md:gap-20 h-[90vh] md:h-[100vh]">
            <img src={dp} alt="Profile" className="w-[230px] h-[230px] md:w-[400px] md:h-[400px] rounded-[50%]" />
            <div className="text-center mx-[5px]">
                <p className="text-base text-[#626362] font-semibold md:my-3">Hello, I'm</p>
                <h1 className="text-3xl md:text-5xl font-semibold md:my-3">Pawan Kumar R</h1>
                <p className="text-xl md:text-[28px] text-[#626362] font-semibold my-3">Frontend Developer</p>
                <div className="flex gap-5 my-4 justify-center">
                    <a
                        href="/Pawan Resume-2024.pdf"
                        target="_blank"
                        className="border-[2px] border-[#3b3a3a] p-3 rounded-3xl font-medium text-[13px] hover:bg-[#3b3a3a] hover:text-white ease-in-out transition-all"
                    >
                        Download CV
                    </a>
                    <a
                        href="#contact" className="text-[13px] border-[2px] border-[#3b3a3a] p-3 rounded-3xl font-medium bg-[#3b3a3a] text-white">Contact Info</a>
                </div>
                <div className="flex gap-7 justify-center">
                    <a href="https://www.linkedin.com/in/pawankumar0403/"><i className="fa-brands fa-linkedin fa-2xl my-4"></i></a>
                    <a href="https://github.com/Pawankumar0403"><i className="fa-brands fa-github fa-2xl my-4"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Home;
