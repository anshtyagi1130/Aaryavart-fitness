type Service = {
  icon: string;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: "🏋️",
    title: "Weight Training",
    desc: "Strength aur muscle building ke liye modern equipment aur free weights.",
  },
  {
    icon: "🧑‍🏫",
    title: "Personal Training",
    desc: "Expert trainer ke saath one-on-one sessions, tumhare goal ke hisaab se plan.",
  },
  {
    icon: "🏃",
    title: "Cardio Zone",
    desc: "Treadmill, cycling aur HIIT se fat loss aur stamina badhao.",
  },
  {
    icon: "🧘",
    title: "Yoga & Meditation",
    desc: "Flexibility, balance aur mental peace ke liye daily yoga classes.",
  },
  {
    icon: "💃",
    title: "Zumba & Group Classes",
    desc: "Fun aur energetic group workouts, jahan motivation apne aap aa jata hai.",
  },
  {
    icon: "🥗",
    title: "Diet & Nutrition",
    desc: "Custom diet plans jo tumhare workout aur body type ke saath match karein.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 bg-black px-8 py-20 text-white"
    >
      <div className="absolute top-0 left-0 h-0.5 w-full bg-lime-400"></div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-semibold tracking-widest  uppercase">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-lime-400 md:text-5xl">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-800 bg-linear-to-b from-zinc-900 to-black p-8 transition duration-300 hover:-translate-y-2 hover:border-lime-400"
            >
              <div className="mb-4 text-5xl">{icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-lime-400">
                {title}
              </h3>
              <p className="text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;