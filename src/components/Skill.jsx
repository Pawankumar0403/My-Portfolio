import cm from "../assets/images/checkmark.png"

function Skill() {

    return (
        <div className="flex flex-col justify-center items-center h-[100vh] my-36 md:my-0" id="skill">
            <p className="text-base text-[#555555] text-center my-2">Explore My</p>
            <h1 className="text-3xl md:text-5xl text-center font-medium my-2">Skills</h1>

            <div className="flex justify-center items-center my-10 flex-wrap  gap-10">
            <div className="flex flex-col flex-wrap border-[2px] border-[#a3a3a3] px-[20px] md:px-24 md:py-5 rounded-3xl w-[90%] md:w-auto">
            <h2 className="text-xl md:text-3xl font-medium text-[#555555] text-center mb-5 md:mb-10 mt-3">Frontend Development</h2>

                    <div className="grid grid-cols-2 gap-5 md:gap-8 mb-5">

                    <div className="flex md:gap-5 gap-1">
                    <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">HTML</h3>
                                <p className="text-base text-[#555555]">Experienced</p>
                            </div>
                        </div>

                        <div className="flex md:gap-5 gap-1">
                            <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">CSS</h3>
                                <p className="text-base text-[#555555]">Intermediate</p>
                            </div>
                        </div>

                        <div className="flex md:gap-5 gap-1">
                            <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">Tailwind CSS</h3>
                                <p className="text-base text-[#555555]">Intermediate</p>
                            </div>
                        </div>

                        <div className="flex md:gap-5 gap-1">
                            <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">JavaScript</h3>
                                <p className="text-base text-[#555555]">Basic</p>
                            </div>
                        </div>

                        <div className="flex md:gap-5 gap-1">
                            <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">React.js</h3>
                                <p className="text-base text-[#555555]">Basic</p>
                            </div>
                        </div>

                        <div className="flex md:gap-5 gap-1">
                                <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">Git & GitHub</h3>
                                <p className="text-base text-[#555555]">Intermediate</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col flex-wrap border-[2px] border-[#a3a3a3] px-[25px] md:px-24 md:py-5 rounded-3xl md:h-[355px] h-auto w-[90%] md:w-auto">
                    <h2 className="text-xl md:text-3xl font-medium text-[#555555] text-center mb-5 md:mb-10 mt-3">Backend Development</h2>

                    <div className="grid grid-cols-2 gap-5 md:gap-8 mb-5">

                        <div className="flex md:gap-5 gap-1">
                            <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">Node.js</h3>
                                <p className="text-base text-[#555555]">Intermediate</p>
                            </div>
                        </div>

                        <div className="flex md:gap-5 gap-1">
                            <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">Express</h3>
                                <p className="text-base text-[#555555]">Intermediate</p>
                            </div>
                        </div>

                        <div className="flex md:gap-5 gap-1">
                            <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">MongoDB</h3>
                                <p className="text-base text-[#555555]">Intermediate</p>
                            </div>
                        </div>

                        <div className="flex md:gap-5 gap-1">
                            <img src={cm} alt="Experience" className="w-8 h-8" />
                            <div>
                                <h3 className="font-semibold text-lg">MySQL</h3>
                                <p className="text-base text-[#555555]">Basic</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    )
}

export default Skill