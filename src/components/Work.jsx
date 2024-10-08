import p1 from "../assets/images/project-1.jpg";
import p2 from "../assets/images/project-2.jpg";
import p3 from "../assets/images/project-3.png";

function Work() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] mt-[480px] mb-10 md:mb-0 md:mt-0 relative" id="work">
      <p className="text-base text-[#555555] text-center my-2">Browse My Recent</p>
      <h1 className="text-3xl md:text-5xl text-center font-medium my-2">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center mt-10 w-[85%] md:w-[75%]">
        <div className="border-[2px] border-[#a3a3a3] p-6 rounded-3xl bg-[#FAFAFA] hover:bg-[#e9e9e9]">
          <img src={p1} alt="Nostra E-Commerce" className="w-[90%] md:w-72 h-[90%] md:h-72 rounded-[30px] mx-auto" />
          <h1 className="text-xl md:text-3xl font-medium text-center my-4">Nostra E-Commerce</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-1 mt-3 text-center justify-center">
            <a href="https://github.com/Pawankumar0403/Nostra-E-Commerce" className="text-[13px] border-[2px] border-[#a3a3a3] py-3 px-9 md:px-10 md:py-3 rounded-3xl font-medium w-fit m-auto">GitHub</a>
            <a href="https://pawankumar0403.github.io/Nostra-E-Commerce/" className="text-[13px] border-[2px] border-[#a3a3a3] py-3 px-6 md:px-10 md:py-3 rounded-3xl font-medium w-fit m-auto">Live Demo</a>
          </div>
        </div>

        <div className="border-[2px] border-[#a3a3a3] p-6 rounded-3xl bg-[#FAFAFA] hover:bg-[#e9e9e9]">
          <img src={p2} alt="To-Do Website" className="w-[70%] md:w-72 h-[35%] md:h-72 rounded-[30px] mx-auto" />
          <h1 className="text-xl md:text-3xl font-medium text-center my-4">To-Do Website</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-1 mt-3 text-center justify-center">
            <a href="https://github.com/Pawankumar0403/Actodo" className="text-[13px] border-[2px] border-[#a3a3a3] py-3 px-9 md:px-10 md:py-3 rounded-3xl font-medium w-fit m-auto">GitHub</a>
            <a href="https://actodo-rouge.vercel.app/" className="text-[13px] border-[2px] border-[#a3a3a3] py-3 px-6 md:px-10 md:py-3 rounded-3xl font-medium w-fit m-auto">Live Demo</a>
          </div>
        </div>

        <div className="border-[2px] border-[#a3a3a3] p-6 rounded-3xl bg-[#FAFAFA] hover:bg-[#e9e9e9]">
          <img src={p3} alt="Nostra E-Commerce" className="w-[90%] md:w-72 h-[90%] md:h-72 rounded-[30px] mx-auto" />
          <h1 className="text-xl md:text-3xl font-medium text-center my-4">Perfumy</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-1 mt-3 text-center justify-center">
            <a href="https://github.com/Pawankumar0403/Perfumy-React" className="text-[13px] border-[2px] border-[#a3a3a3] py-3 px-9 md:px-10 md:py-3 rounded-3xl font-medium w-fit m-auto">GitHub</a>
            <a href="https://perfumy-react-five-silk.vercel.app/" className="text-[13px] border-[2px] border-[#a3a3a3] py-3 px-6 md:px-10 md:py-3 rounded-3xl font-medium w-fit m-auto">Live Demo</a>
          </div>
        </div>
      </div>
      <a href="#contact" className="absolute bottom-14 right-20 hidden md:block"><i className="fa-solid fa-angles-down fa-2xl"></i></a>
    </div>
  );
}

export default Work;
