type Plan = {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    price: 999,
    features: ["Gym access (6 AM - 10 PM)", "Cardio zone", "Locker facility"],
  },
  {
    name: "Standard",
    price: 1999,
    popular: true,
    features: [
      "All basic features",
      "Group classes (Yoga, Zumba)",
      "Diet plan",
      "1 trainer consultation",
    ],
  },
  {
    name: "Premium",
    price: 2999,
    features: [
      "Standard ke saare features",
      "Personal trainer",
      "Weekly progress tracking",
      "Steam & shower access",
    ],
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 bg-gray-950 px-8 py-20 text-white"
    >
      <div className="absolute top-0 left-0 h-0.5 w-full bg-lime-400"></div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-semibold tracking-widest uppercase">
            Membership
          </p>
          <h2 className="text-4xl font-bold text-lime-400  md:text-5xl">Our Pricing</h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {plans.map(({ name, price, features, popular }) => (
            <div
              key={name}
              className={`relative rounded-xl border p-8 transition duration-300 hover:-translate-y-2 ${
                popular
                  ? "border-lime-400 bg-black md:scale-105"
                  : "border-zinc-800 bg-linear-to-b from-zinc-900 to-black"
              }`}
            >
              {popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-1 text-sm font-bold text-black">
                  MOST POPULAR
                </span>
              )}

              <h3 className="mb-4 text-2xl font-semibold text-lime-400">
                {name}
              </h3>

              <p className="mb-6">
                <span className="text-5xl font-bold">
                  ₹{price.toLocaleString("en-IN")}
                </span>
                <span className="text-zinc-400"> /month</span>
              </p>

              <ul className="mb-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-zinc-300">
                    <span className="text-lime-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block rounded-md py-3 text-center font-bold transition-colors ${
                  popular
                    ? "bg-lime-400 text-black hover:bg-lime-200"
                    : "border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black"
                }`}
              >
                JOIN NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;