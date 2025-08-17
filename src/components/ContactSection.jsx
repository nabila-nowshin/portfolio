// ContactSection.tsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_ztmt03t",
        "template_6edrhvo",
        form.current,
        "YWmskhN5CKRQdMhnW"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully! ✅");
          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          toast.error(`Error: ${error.text}`);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-base-100">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
          <p className="text-base-content/70">
            Have a question or want to work together? Send me a message!
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 bg-base-300/40 backdrop-blur-3xl p-8 rounded-2xl"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input input-bordered w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full resize-none"
            rows={6}
            required
          ></textarea>

          <button
            type="submit"
            className={`btn btn-primary flex items-center justify-center gap-2 ${
              loading ? "loading" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"} <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
}
