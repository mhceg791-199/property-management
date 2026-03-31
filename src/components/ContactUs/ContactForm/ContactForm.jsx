import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import axios from "axios";
import { API_ENDPOINTS } from "../../../config/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    site: { name: "Mosaic Property Management", url: "https://mosaic-propmgmt.com" },
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(API_ENDPOINTS.sendContact, form);

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message || "Message sent successfully!", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#1C2536",
            color: "#C5A363",
            border: "1px solid #C5A363",
          },
        });

        // Reset form
        setForm({
          name: "",
          email: "",
          message: "",
          site: { name: "Mosaic Property Management", url: "https://mosaic-propmgmt.com" },
        });
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />

      <div className="w-full h-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-white"
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
              className="w-full px-4 py-3 text-black rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
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
              className="w-full px-4 py-3 text-black rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
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
              className="w-full px-4 py-3 text-black rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all resize-y"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn-boder-blue py-3 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
