import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import Navbar from "../components/Navbar";
import { MdMail } from "react-icons/md";
import { useState } from "react";
import Notification from "../components/Notification";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      // TODO : Implement the form submission logic here
      setShowNotification(true);
      setNotificationText("Functionality is not implemented yet!");
    } catch (error) {
      console.error("Error Submitting Form", error);
      setShowNotification(true);
      setNotificationText("Error Submitting Form!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex flex-col gap-5 px-0">
      <Navbar />
      <div className="card-wrapper mb-2 mt-24 flex flex-col items-center gap-5">
        {/* Hero Section */}
        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Let's Build Something Amazing Together!
        </h1>
        <p className="mb-6 text-center text-lg text-secondary">
          I'd love to hear from you! Whether it's a project, a job opportunity,
          or just a chat.
        </p>

        {/* Contact Form */}
        <form
          className="w-full max-w-lg rounded-xl bg-[#1e1e1e] p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 w-full rounded-md border border-gray-700 bg-slate-100 p-2 text-black focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 w-full rounded-md border border-gray-700 bg-slate-100 p-2 text-black focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <textarea
            placeholder="Your Message"
            className="mb-4 h-32 w-full rounded-md border border-gray-700 bg-slate-100 p-2 text-black focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
            name="message"
            value={formData.message}
          ></textarea>
          <button
            type="submit"
            className={`flex w-full items-center justify-center gap-4 rounded-md bg-orange-500 py-2 text-white transition-all duration-300 hover:bg-orange-600 ${
              isSubmitting && "cursor-not-allowed bg-opacity-60"
            }`}
          >
            {isSubmitting ? "Sending ..." : "Send Message"}
            {isSubmitting && (
              <AiOutlineLoading3Quarters className="size-4 animate-spin" />
            )}
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-8 flex gap-6">
          <a
            href="https://github.com/AKSHAY13PATEL"
            target="_blank"
            className="flex items-center gap-2 text-white transition-all duration-300 hover:scale-110 hover:text-orange-400"
          >
            GitHub <TiSocialGithubCircular className="size-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshay-patel-917888135/"
            target="_blank"
            className="flex items-center gap-2 text-white transition-all duration-300 hover:scale-110 hover:text-blue-400"
          >
            LinkedIn <TiSocialLinkedinCircular className="size-7" />
          </a>
          <a
            href="mailto:akshaypatel.ap1320@gmail.com"
            className="flex items-center gap-2 text-white transition-all duration-300 hover:scale-110 hover:text-green-400"
          >
            Email <MdMail className="size-7" />
          </a>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <Notification
          text={notificationText}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default ContactPage;
