
function Hero() {
  return (
    <div id="home" className="relative min-h-[90vh] overflow-hidden flex flex-col md:flex-row items-center justify-center bg-gray-900">
      <div className=" w-1/2  ">
        <h2 className="text-lime-400 font-bold text-2xl">  UNLEASH YOUR POTENTIAL</h2>
        <h1 className="text-white font-bold text-6xl"> BUILD YOUR BODY. BUILD YOUR LEGACY.</h1>
        <a
          href="#services"
          className="inline-block mt-6 bg-lime-400 text-black px-8 py-3 rounded-md font-bold hover:bg-lime-200 transition-colors"
        >
          GET STARTED
        </a>

      </div >
      <div className="relative w-full md:w-1/2 flex justify-center items-center">

        {/* Background Glow - Behind Image */}
        <div className="absolute z-0 w-72 h-72 md:w-96 md:h-96 
    bg-lime-400/40 rounded-full blur-[120px]">
        </div>
        {/* Diagonal Green Lines */}
        <div className="absolute z-0 top-40 right-30px w-150 h-5 bg-lime-400 rotate-[-35deg] blur-[2px] opacity-70"></div>


        <div className="absolute z-0 top-40 left-30px w-150 h-5 bg-lime-400 rotate-35 blur-[2px] opacity-70"></div>


        {/* Original Image */}
        <img
          src="/bg img.png"
          alt="Bodybuilder"
          className="relative z-10 w-full max-w-md h-auto object-contain"
        />

      </div>

    </div>


  )

}
export default Hero;