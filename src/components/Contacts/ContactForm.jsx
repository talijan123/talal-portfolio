import { useState } from "react";
import emailjs from "@emailjs/browser";
import { HiPaperAirplane } from "react-icons/hi2";

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
      className="
        rounded-3xl

        bg-white
        dark:bg-slate-900/70

        border
        border-slate-200
        dark:border-slate-700

        backdrop-blur-xl

        p-8

        shadow-lg
        shadow-slate-200/50
        dark:shadow-none

        transition-all
        duration-300
      "
    >
      <div className="space-y-6">

        {/* Name */}

        <input
          type="text"
          name="from_name"
          value={form.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          className="
            w-full

            rounded-xl

            border
            border-slate-300
            dark:border-slate-700

            bg-slate-100
            dark:bg-slate-800

            px-5
            py-4

            text-slate-900
            dark:text-white

            placeholder:text-slate-500

            outline-none

            transition-all
            duration-300

            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/20
          "
        />

        {/* Email */}

        <input
          type="email"
          name="from_email"
          value={form.from_email}
          onChange={handleChange}
          placeholder="Your Email"
          className="
            w-full

            rounded-xl

            border
            border-slate-300
            dark:border-slate-700

            bg-slate-100
            dark:bg-slate-800

            px-5
            py-4

            text-slate-900
            dark:text-white

            placeholder:text-slate-500

            outline-none

            transition-all
            duration-300

            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/20
          "
        />

        {/* Message */}

        <textarea
          rows="6"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="
            w-full

            rounded-xl

            border
            border-slate-300
            dark:border-slate-700

            bg-slate-100
            dark:bg-slate-800

            px-5
            py-4

            text-slate-900
            dark:text-white

            placeholder:text-slate-500

            outline-none

            resize-none

            transition-all
            duration-300

            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/20
          "
        />

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="
            group

            flex
            items-center
            justify-center
            gap-3

            w-full

            rounded-xl

            bg-blue-600

            px-6
            py-4

            font-semibold
            text-white

            transition-all
            duration-300

            hover:bg-blue-700
            hover:shadow-lg
            hover:shadow-blue-500/30

            disabled:bg-slate-500
            disabled:cursor-not-allowed
          "
        >
          {loading ? "Sending..." : "Send Message"}

          {!loading && (
            <HiPaperAirplane
              size={20}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          )}
        </button>

        {/* Status */}

        {status && (
          <p
            className={`text-center font-medium ${
              status.startsWith("✅")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}

      </div>
    </form>
  );
}