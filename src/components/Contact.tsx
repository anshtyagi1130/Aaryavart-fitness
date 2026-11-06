import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type ContactForm = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const info = [
  { icon: "📍", label: "Address", value: "Ghaziabad, Uttar Pradesh" },
  { icon: "📞", label: "Phone", value: "+91 98765 43210" },
  { icon: "✉️", label: "Email", value: "info@aaryavartfitness.com" },
  { icon: "🕒", label: "Timings", value: "Mon - Sat: 6 AM - 10 PM" },
];

const inputClass =
  "w-full rounded-md border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-lime-400";

function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setError("Naam aur message zaroori hain.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      setError("Phone number 10 digit ka hona chahiye.");
      return;
    }

    setError("");
    console.log(form); // abhi sirf console mein dikhega
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 bg-gray-950 px-8 py-20 text-white"
    >
      <div className="absolute top-0 left-0 h-0.5 w-full bg-lime-400"></div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-semibold tracking-widest text-lime-400 uppercase">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left: info */}
          <div className="space-y-6">
            {info.map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="text-3xl">{icon}</span>
                <div>
                  <h3 className="font-semibold text-lime-400">{label}</h3>
                  <p className="text-zinc-300">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 rounded-xl border border-zinc-800 bg-black p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-zinc-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Tumhara naam"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm text-zinc-400">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="10 digit number"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-zinc-400">
                Email (optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Kya jaanna chahte ho?"
                className={inputClass}
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}
            {sent && (
              <p className="text-sm text-lime-400">
                Shukriya! Hum jaldi hi tumse sampark karenge.
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-lime-400 py-3 font-bold text-black transition-colors hover:bg-lime-200"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;