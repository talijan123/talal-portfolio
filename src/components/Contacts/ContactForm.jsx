export default function ContactForm() {
  return (
    <form className="space-y-6">
      <input
        type="text"
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
        "
      />

      <input
        type="email"
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
        "
      />

      <textarea
        rows="6"
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
        "
      ></textarea>

      <button
        className="
          bg-blue-600
          hover:bg-blue-700
          transition
          px-8
          py-4
          rounded-xl
          font-semibold
        "
      >
        Send Message
      </button>
    </form>
  );
}