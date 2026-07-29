import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.from_name.trim() ||
      !form.from_email.trim() ||
      !form.message.trim()
    ) {
      setStatus("❌ Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");

      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input
        type="text"
        name="from_name"
        value={form.from_name}
        onChange={handleChange}
        placeholder="Your Name"
        className="
          w-full
          p-4
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          outline-none
          focus:border-blue-500
          transition
        "
      />

      <input
        type="email"
        name="from_email"
        value={form.from_email}
        onChange={handleChange}
        placeholder="Your Email"
        className="
          w-full
          p-4
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          outline-none
          focus:border-blue-500
          transition
        "
      />

      <textarea
        rows="6"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="
          w-full
          p-4
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          outline-none
          focus:border-blue-500
          resize-none
          transition
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          disabled:bg-slate-700
          disabled:cursor-not-allowed
          transition-all
          duration-300
          px-8
          py-4
          rounded-xl
          font-semibold
        "
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p
          className={`text-center font-medium ${
            status.startsWith("✅")
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}