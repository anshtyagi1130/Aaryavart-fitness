function About() {
  return (
    <div
      id="about"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gray-950 md:flex-row"
    >
      <div className="absolute top-0 left-0 z-0 h-0.5 w-full bg-lime-400"></div>

      <div className="w-1/2 md:self-end">
        <div className="absolute top-70 right-110 z-0 h-40 w-150 rotate-70 bg-linear-to-r from-lime-400 via-lime-800 to-gray-900 opacity-70 blur-[2px]"></div>

        <img
          src="/bgimg2.png"
          alt="Bodybuilder"
          className="relative right-0 z-0 block h-auto w-full max-w-md object-contain"
        />
        <div className="absolute bottom-2 left-2 z-20 
  bg-lime-400 text-black px-5 py-3 rounded-lg">
          <p className="font-bold text-lg">EXPERT</p>
          <p className="text-xs font-semibold tracking-widest">
            FITNESS GUIDANCE
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 text-white">

        <p className="text-lime-400 font-semibold tracking-[3px]">
          WHO WE ARE
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          MORE THAN A GYM.
          <span className="text-lime-400"> A LIFESTYLE.</span>
        </h2>

        <p className="text-gray-400 leading-7">
          Aaryavart Fitness is more than just a gym — it's a place
          where discipline meets determination. With modern equipment
          and expert guidance, we help you become stronger every day.
        </p>

      </div>
    </div>
  );
}

export default About;