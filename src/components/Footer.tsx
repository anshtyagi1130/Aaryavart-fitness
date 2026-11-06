const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://youtube.com", label: "YouTube" },
];

function Footer() {
  return (
    <footer className="relative bg-black px-8 pt-16 pb-6 text-white">
      <div className="absolute top-0 left-0 h-0.5 w-full bg-lime-400"></div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img
            src="/logo.png"
            alt="Aaryavart Fitness"
            height={48}
            className="mb-4 h-12 w-auto"
          />
          <p className="text-zinc-400">
            Build your body. Build your legacy. Aaryavart Fitness ke saath apne
            fitness goals ko pura karo.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-lime-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-zinc-400 transition-colors hover:text-lime-400 focus-visible:text-lime-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-lime-400">
            Follow Us
          </h3>
          <ul className="space-y-2">
            {socials.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 transition-colors hover:text-lime-400 focus-visible:text-lime-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Aaryavart Fitness. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;