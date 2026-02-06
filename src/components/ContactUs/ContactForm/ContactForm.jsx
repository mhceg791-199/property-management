import { useState } from "react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full  bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2 text-white"
      >
        <h2 className="heading mb-6 font-medium text-mainColor">
          <SectionHeader firstWord="Get in Touch" />
        </h2>

        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2 paragraph">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-1 focus:ring-mainColor"
          />
        </div>

        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2 paragraph">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-1 focus:ring-mainColor"
          />
        </div>

        <div className="mb-8">
          <label className="block text-black text-sm font-bold mb-2 paragraph">
            Your Message
          </label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full px-4 py-2 text-black rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-1 focus:ring-mainColor"
          ></textarea>
        </div>

        <div>
          <button className="btn-boder-blue">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}



