// // ContactSection.tsx
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { FiSend } from "react-icons/fi";
// import toast, { Toaster } from "react-hot-toast";

// export default function ContactSection() {
//   const form = useRef(null);
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (!form.current) return;

//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_ztmt03t",
//         "template_6edrhvo",
//         form.current,
//         "YWmskhN5CKRQdMhnW"
//       )
//       .then(
//         () => {
//           setLoading(false);
//           toast.success("Message sent successfully! ✅");
//           form.current?.reset();
//         },
//         (error) => {
//           setLoading(false);
//           toast.error(`Error: ${error.text}`);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-20 bg-base-100">
//       <Toaster position="bottom-center" reverseOrder={false} />
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="mb-12 text-center">
//           <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
//           <p className="text-base-content/70">
//             Have a question or want to work together? Send me a message!
//           </p>
//         </div>

//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="flex flex-col gap-4 bg-base-300/40 backdrop-blur-3xl p-8 rounded-2xl"
//         >
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             className="input input-bordered w-full"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             className="textarea textarea-bordered w-full resize-none"
//             rows={6}
//             required
//           ></textarea>

//           <button
//             type="submit"
//             className={`btn btn-primary flex items-center justify-center gap-2 ${
//               loading ? "loading" : ""
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Send Message"} <FiSend />
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

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
    <section id="contact" className=" bg-base-100 pt-20 md:pt-30">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side: Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-12">
              <span className="w-2 h-12 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full"></span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Contact Me
              </h2>
            </div>
            <p className="text-base-content/90 mb-2 md:text-lg">
              Got a question, a project idea, or just want to say hi? I’d love
              to hear from you!
            </p>
            <p className="text-base-content/60 italic md:text-lg">
              “Collaboration makes the dream work.”
            </p>
            <p className="text-base-content/90 mt-2 md:text-lg">
              Let’s build something amazing together! 🚀
            </p>
          </div>

          {/* Right side: Form */}
          <div className="flex-1 w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 bg-base-300/40 backdrop-blur-3xl p-8 rounded-4xl shadow-lg border border-base-200 hover:shadow-xl transition-all"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full resize-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
                rows={6}
                required
              ></textarea>

              <button
                type="submit"
                className={`btn bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white flex items-center justify-center gap-2 hover:brightness-110 transition-all ${
                  loading ? "loading" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"} <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
